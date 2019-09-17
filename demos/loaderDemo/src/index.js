import printMe from "./print";
import txt from "./data.txt";
import answer from "./target-file";
import smallPic from "./imgs/smallPic.jpg";
import bigPic from "./imgs/bigPic.jpg";
import bigPic2 from "./bigPic2.jpg";
import jsoText from "./jsonTest.jso";
import json5Text from "./json5Test.json5";
import csonText from "./csontest.cson";
import firstStyle from "./index.css";
import style from "./index.useable.css";
import style2 from "./index2.useable.css";

function component() {
  console.log(answer);
  if (process.env.NODE_ENV === "development") {
    console.log("development");
  }
  if (process.env.NODE_ENV === "production") {
    console.log("production");
  }
  var element = document.createElement("div");
  element.innerHTML = "webpack test";

  var btn = document.createElement("button");
  btn.innerHTML = `点击这里，然后查看 console！${txt}`;
  btn.onclick = printMe;
  element.appendChild(btn);

  var smallPicture = new Image();
  smallPicture.src = smallPic;
  element.appendChild(smallPicture);

  var bigPicture = new Image();
  bigPicture.src = bigPic;
  element.appendChild(bigPicture);

  var bigPicture2 = new Image();
  bigPicture2.src = bigPic2;
  element.appendChild(bigPicture2);

  var jso = document.createElement("div");
  jso.innerHTML = `${jsoText.name}`;
  jso.classList.add("fontColor");
  element.appendChild(jso);

  var json5 = document.createElement("div");
  json5.innerHTML = `${json5Text.env}`;
  json5.classList.add(firstStyle.fontColor);

  element.appendChild(json5);

  var cson = document.createElement("div");
  cson.innerHTML = `${csonText.importantFacts.more}`;
  cson.classList.add(firstStyle.fontColor);
  element.appendChild(cson);

  var btnYellow = document.createElement("button");
  btnYellow.innerHTML = `黄色`;
  btnYellow.onclick = () => {
    style.unuse();
    style2.unuse();
  };
  element.appendChild(btnYellow);

  var btnGreen = document.createElement("button");
  btnGreen.innerHTML = `绿色`;
  btnGreen.onclick = () => {
    style.use();
    style2.unuse();
  };
  element.appendChild(btnGreen);

  var btnRed = document.createElement("button");
  btnRed.innerHTML = `红色`;
  btnRed.onclick = () => {
    style.unuse();
    style2.use();
  };
  element.appendChild(btnRed);

  return element;
}

document.body.appendChild(component());
