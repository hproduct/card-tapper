import React, { useEffect, useState } from "react";
import {} from "./styles.css";
import DynamicFaIcon from "../../../src/components/ui/DynamicFaIcon";
import { Error } from "../Error/error";
import { db } from "../../../src/data/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { Loading } from "../Loading/loading";
import { useParams } from "react-router-dom";

export function ViewCard() {
  const [loading, setLoading] = useState(false);
  let params = useParams();
  let userName = params.userName;
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
        const docRef = doc(db, "users", userName);
        getDoc(docRef)
          .then((doc) => {
            const data = doc.data();
            setUser({
              links: [...data.Links],
              description: data.description.replace('\\n', '\n'),
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
            console.log(err);
          });
      } catch (e) {
        setError(true);
        setLoading(false);
        console.log(e);
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
              minHeight: "100vh",
            }
            : {
              backgroundImage: `url(${user.background.text})`,
              display: "flex ",
              flexDirection: "column",
              minHeight: "100vh",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
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
          <div className="Biography" style={{ color: user.themeColor, whiteSpace: "pre-wrap" }}>
            <h3>{user.description}</h3>
          </div>
        </div>
        <div className="Body">
          {user.links.map((item) => {
            return (
              <a href={item.link} className="url" key={item.icon}>
                <div
                  style= { {border: "1px solid " + user.themeColor}}
                  className="social-platform-list"
                >
                  <div className="link" style={ {color: user.themeColor}}>
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
