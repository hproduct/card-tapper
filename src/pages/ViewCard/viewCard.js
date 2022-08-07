import React from "react";
import styles from "./styles.css";
import avatar from "../../../src/assets/image/avatar.png";
import {
  FaFacebook,
  FaGit,
  FaGlobe,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
export function ViewCard() {
  return (
    <body>
      <title>Hai</title>
      <div className="Header">
        <div className="Avatar">
          <img src={avatar} className="Image" alt="" />
        </div>
        <div className="Name">
          <p>Lê Sơn Hải</p>
        </div>
        <div className="Biography">
          <h3>
            Tôi là một Android Developer
            <br></br>
            Tôi thích chơi game
            <br></br>
            Tôi yêu động vật
          </h3>
        </div>
      </div>
      <div className="Body">
        <a
          href="https://www.facebook.com/profile.php?id=100006584739365"
          className="url"
        >
          <div className="social-platform-list">
            <div className="link">
              <div className="icon">
                <FaFacebook size="26px" color="#41784f" />
              </div>
              <div className="title">Sơn Hải</div>
              <div className="icon">
                <FaFacebook size="26px" color="#41784f" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/hhaiiro/" className="url">
          <div className="social-platform-list">
            <div className="link">
              <div className="icon">
                <FaInstagram size="26px" color="#41784f" />
              </div>
              <div className="title">@hhaiiro</div>
              <div className="icon">
                <FaInstagram size="26px" color="#41784f" />
              </div>
            </div>
          </div>
        </a>
        <a href="www.google.com" className="url">
          <div className="social-platform-list">
            <div className="link">
              <div className="icon">
                <FaMailBulk size="26px" color="#41784f" />
              </div>
              <div className="title">sonhai@gmail.com</div>
              <div className="icon">
                <FaMailBulk size="26px" color="#41784f" />
              </div>
            </div>
          </div>
        </a>
        <a href="tel:0969790938" className="url">
          <div className="social-platform-list">
            <div className="link">
              <div className="icon">
                <FaPhone size="26px" color="#41784f" />
              </div>
              <div className="title">0969790938</div>
              <div className="icon">
                <FaPhone size="26px" color="#41784f" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/hai1411" className="url">
          <div className="social-platform-list">
            <div className="link">
              <div className="icon">
                <FaGit size="26px" color="#41784f" />
              </div>
              <div className="title">hai1411</div>
              <div className="icon">
                <FaGit size="26px" color="#41784f" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://codelearn.io/profile/988444" className="url">
          <div className="social-platform-list">
            <div className="link">
              <div className="icon">
                <FaGlobe size="26px" color="#41784f" />
              </div>
              <div className="title">Son Hai</div>
              <div className="icon">
                <FaGlobe size="26px" color="#41784f" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </body>
  );
}

export default ViewCard;
