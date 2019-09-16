import printMe from "./print";
import txt from "./data.txt";
import answer from "./target-file";
import smallPic from "./imgs/smallPic.jpg";
import bigPic from "./imgs/bigPic.jpg";
import bigPic2 from "./bigPic2.jpg";
import "./index.html";

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

  return element;
}

document.body.appendChild(component());
