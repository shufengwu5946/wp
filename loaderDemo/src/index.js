import printMe from "./print";
import txt from './file.txt';
function component() {
  var element = document.createElement("div");

  element.innerHTML = "webpack test";
  var btn = document.createElement("button");
  btn.innerHTML = `点击这里，然后查看 console！${txt}`;
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
