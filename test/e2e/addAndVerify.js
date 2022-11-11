describe('To-Do List End-to-End Tests', function() {

  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element('#new-todo-input');
  const addButtonEl = element('form button[type="submit"]');

  it('should add a todo using global element()', async function({ page, expect }) {
    const todoPage = page.todo();

    // adding a new task to the list
    await todoPage
      .navigate()
      .sendKeys(todoElement, 'what is nightwatch?')
      .click(addButtonEl);

    // verifying if there are 4 tasks in the list
    await expect.elements('ul.todo-list li').count.toEqual(4);

    // verifying if the 4th task is the one we have just added
    const lastElementTask = element({
      selector: 'ul.todo-list li',
      index: 3
    });

    await expect(lastElementTask).text.toContain('what is nightwatch?');
    await todoPage.complete(lastElementTask);

    // verify if there are 2 tasks which are marked as done in the list
    await expect.elements('ul.todo-list li input:checked').count.toEqual(2);
  });

});
