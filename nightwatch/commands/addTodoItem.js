export default class {
  command({text, todoElement, addButtonEl}) {
    this.api
      .sendKeys(todoElement, text)
      .click(addButtonEl);
  }
}