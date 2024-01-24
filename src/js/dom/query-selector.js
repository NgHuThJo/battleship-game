function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}

function getAllElements(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

export { getElement, getAllElements };
