import React from "react";
import styles from "./styles.css";
import avatar from '../../../src/assets/image/avatar.png'
import { FaFacebook, FaInstagram, FaMailBulk , FaPhone, FaTiktok } from "react-icons/fa";
export function ViewCard() {
  return (
    <body>
      <header className="Header">
            <div className="Avatar">
                <img  src={avatar}  className="Image"/>   
            </div>
            <div className="Name">
                <p>Lê Sơn Hải</p>
            </div> 
            <div className="Biography">
                <h3>Tôi là một android developer</h3>
            </div>
      </header>
      <main>
        <section className="social-platform-list">
          <div className="icon"><FaFacebook color="#41784f"/></div>
          <div className="title">Sơn Hải</div>
        </section>
        <section className="social-platform-list">
          <div className="icon"><FaInstagram color="#41784f"/></div>
          <div className="title">@hirohai</div>
        </section>
        <section className="social-platform-list">
          <div className="icon"><FaMailBulk color="#41784f"/></div>
          <div className="title">sonhai@gmail.com</div>
        </section>
        <section className="social-platform-list">
          <div className="icon"><FaPhone color="#41784f"/></div>
          <div className="title">0969790938</div>
        </section>
        <section className="social-platform-list">
          <div className="icon"><FaTiktok color="#41784f"/></div>
          <div className="title">@haitiktoker</div>
        </section>
      </main>
    </body>
  );
}

export default ViewCard;
