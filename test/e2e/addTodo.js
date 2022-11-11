describe('add todo list item', function() {

  it('should add a todo using global element()', function({ page, expect }) {

    const todoPage = page.todo();

    todoPage
      .navigate()
      .add('what is nightwatch?');

    todoPage.assert.tasksCount('@listItem', 4);

    // verifying if there are 4 tasks in the list
    expect.elements('ul.todo-list li').count.toEqual(4);
  });

});
