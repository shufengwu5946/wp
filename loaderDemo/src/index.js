import printMe from "./print";
import txt from "./data.txt";
import answer from "./target-file";
import smallPic from "./smallPic.jpg";
import bigPic from "./bigPic.jpg";
function component() {
  console.log(answer);
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
  return element;
}

document.body.appendChild(component());
