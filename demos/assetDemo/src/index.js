import "./index.css";
import baiduLogo from "./bd_logo1.png";
import googleLogo from "./google_icon.svg";
import xmlData from "./data.xml";

function component() {
  var element = document.createElement("div");
  element.innerHTML = "字体测试123abcABC";
  element.classList.add("mainColor");
  var bgLogo = new Image();
  bgLogo.src = baiduLogo;
  element.appendChild(bgLogo);
  var gLogo = new Image();
  gLogo.src = googleLogo;
  element.appendChild(gLogo);
  console.log(xmlData);
  return element;
}

document.body.appendChild(component());
