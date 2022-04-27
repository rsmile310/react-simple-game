import React, { useEffect, useState } from "react";
import ArrowIcon from "../../components/ArrowIcon";
import "./style.scss";

function GamePage() {
  const name = localStorage.getItem("userName");
  var bgColors = ["gray", "red", "blue", "spin", "red", "yellow", "black", "brown"];
  const randomNumber = Math.floor(Math.random() * 360 + 1);
  var flag = 0;
  const [bgColor, setBgColor] = useState("gray");
  const [rotate, setRotate] = useState("");

  const handleRotate = (num) => {
    setRotate(num);
    setTimeout(() => {
      handleRotateWorking(num);
    }, 2000);
  };
  const handleRotateWorking = (num) => {
    const rotateInterval = setInterval(() => {
      num++;
      setRotate(num);
    }, 4);
    setTimeout(() => {
      handleStop(rotateInterval, num);
    }, 5000);
  };
  const handleStop = (rotateInterval, num) => {
    clearInterval(rotateInterval);
    flag++;
    if(flag==bgColors.length)
      flag=0;
    const randColor = bgColors[flag]
    setBgColor(randColor)
    
    setTimeout(() => {
      handleRotateWorking(num);
    }, 5000);
  };
  useEffect(() => {
    handleRotate(randomNumber);
  }, []);

  return (
    <div style={{ backgroundColor: `${bgColor}` }}>
      <div className="play-box">
        <div
          className={"arrow-icon " + rotate}
          style={{ transform: `Rotate(${rotate}deg)` }}
        >
          <ArrowIcon />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
export default GamePage;
