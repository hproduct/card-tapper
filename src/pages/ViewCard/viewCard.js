import React, { useEffect, useState } from "react";
import {} from "./styles.css";
import DynamicFaIcon from "../../../src/components/ui/DynamicFaIcon";
import { Error } from "../Error/error";
import { db } from "../../../src/data/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Loading } from "../Loading/loading";

export function ViewCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
      try {
        const urlParams = new URLSearchParams(window.location.search);
        let userName = urlParams.get("user");
        const docRef = doc(db, "users", userName);
        getDoc(docRef)
          .then((doc) => {
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
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
          });
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    getUserByID();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div
        style={
          user.background.type === "Color"
            ? {
                backgroundColor: user.background.text,
                display: "flex ",
                flexDirection: "column",
                height: "100vh",
              }
            : {
                backgroundImage: `url(${user.background.text})`,
                display: "flex ",
                margin: 0,
                flexDirection: "column",
                height: "100vh",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }
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
              <a href={item.link} className="url" key={item.icon}>
                <div
                  className="social-platform-list"
                  style={{ border: "1px solid #41784f" }}
                >
                  <div className="link">
                    <div className="icon">
                      <DynamicFaIcon
                        name={`Fa${item.icon}`}
                        themeColor={user.themeColor}
                      />
                    </div>
                    <div className="title">{item.content}</div>
                    <div className="icon">
                      <DynamicFaIcon
                        name={`Fa${item.icon}`}
                        themeColor={user.themeColor}
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ViewCard;
