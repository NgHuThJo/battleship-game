function createClone(template) {
  try {
    if (template.tagName === "TEMPLATE") {
      return template.content.cloneNode(true).firstElementChild;
    }

    throw new TypeError(`${template.tagName} is not a template element`);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

export { createClone };
