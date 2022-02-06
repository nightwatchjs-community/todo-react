describe('To-Do List End-to-End Tests', function() {

  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element('#new-todo-input');
  const addButtonEl = element('form button[type="submit"]');

  it('should add a todo using global element()', function() {
    ///////////////////////////////////////////////////
    // browser can now also be accessed as a global   |
    ///////////////////////////////////////////////////

    // adding a new task to the list
    browser
      .navigateTo(browser.baseUrl)
      .sendKeys(todoElement, 'what is nightwatch?')
      .click(addButtonEl);

    ///////////////////////////////////////////////////
    // global expect is equivalent to browser.expect  |
    ///////////////////////////////////////////////////

    // verifying if there are 4 tasks in the list
    expect.elements('ul.todo-list li').count.toEqual(4);

    // verifying if the 4th task if the one we have just added
    const lastElementTask = element({
      selector: 'ul.todo-list li',
      index: 3
    });

    expect(lastElementTask).text.toContain('what is nightwatch?');

    // find our task in the list and mark it as done
    lastElementTask.findElement('input[type="checkbox"]', function(inputResult) {
      if (inputResult.error) {
        throw inputResult.error;
      }

      const inputElement = element(inputResult.value);
      browser.click(inputElement);
    });

    // verify if there are 2 tasks which are marked as done in the list
    expect.elements('ul.todo-list li input:checked').count.toEqual(2);
  });

});
