// import Print from './out';
import _ from "lodash";
function component() {
  var element = document.createElement("div");
  element.innerHTML = "webpack test";
  // element.onclick = Print.bind(null, 'Hello webpack!');
  return element;
}

document.body.appendChild(component());
