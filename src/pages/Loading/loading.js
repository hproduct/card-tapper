import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import {} from "./styles.css";

export function Loading() {
  const animation = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/animations/loading_animation.json"),
    });
  }, []);

  return <div className="animation" ref={animation}></div>;
}
