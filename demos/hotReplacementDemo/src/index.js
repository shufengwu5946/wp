import printMe from "./print";
import "./style.css";
function component() {
  var element = document.createElement("div");

  element.innerHTML = "webpack test";
  element.classList.add("fc");
  var btn = document.createElement("button");
  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
