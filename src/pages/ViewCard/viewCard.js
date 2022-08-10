import React, { useEffect, useState } from "react";
import {} from "./styles.css";
import DynamicFaIcon from "./DynamicFaIcon"
import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Loading } from "../Loading/loading";

export function ViewCard() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("user");

  console.log(code);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    links: [],
    background: {
      text: "white",
      type: "Color",
    },
  });

  useEffect(() => {
    const getUserByID = async () => {
      setLoading(true);
      const docRef = doc(db, "users", "hirohai");
      getDoc(docRef).then((doc) => {
        const data = doc.data();
        setUser({
          links: [...data.Links],
          description: data.description,
          name: data.name,
          themeColor: data.themeColor,
          avatar: data.avatar,
          background: data.background,
        });
        setLoading(false);
      });
    };
    getUserByID();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <body
        style={
          user.background.type === "Color"
            ? { backgroundColor: user.background.text }
            : { backgroundImage: `url(${user.background.text})` }
        }
      >
        <div className="Header">
          <div className="Avatar">
            <img src={user.avatar} className="Image" alt="" />
          </div>
          <div className="Name" style={{ color: user.themeColor }}>
            <p>{user.name}</p>
          </div>
          <div className="Biography" style={{ color: user.themeColor }}>
            <h3>{user.description}</h3>
          </div>
        </div>
        <div className="Body">
          {user.links.map((item) => {
            return (
              <a href={item.link} className="url">
                <div
                  className="social-platform-list"
                  style={{ border: "1px solid #41784f" }}
                >
                  <div className="link">
                    <div className="icon">
                      <DynamicFaIcon name = {`Fa${user.icon}`} themeColor = {user.themeColor}/>
                    </div>
                    <div className="title">{item.content}</div>
                    <div className="icon">
                      <DynamicFaIcon name = "FaFacebook" themeColor = {user.themeColor}/>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </body>
    );
  }
}

export default ViewCard;
