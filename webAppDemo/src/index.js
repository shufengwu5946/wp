function component() {
  var element = document.createElement("div");
  element.innerHTML = "webpack test";
  return element;
}

document.body.appendChild(component());
