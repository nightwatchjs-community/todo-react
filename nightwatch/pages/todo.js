export default {
  url: '/',

  elements: {
    todoElement: '#new-todo-input',
    addButtonEl: 'form button[type="submit"]',
    listItem: 'ul.todo-list li'

  },

  sections: {
    form: {
      selector: 'form',
      elements: {
        submitButton: 'button[type="submit"]'
      }
    }
  },

  commands: {
    add(text) {
      this.sendKeys('@todoElement', text);
      this.section.form.click('@submitButton');
    },

    async complete(taskElement) {
      const input = await taskElement.findElement('input[type="checkbox"]');
      await this.click(input);
    }
  }
}