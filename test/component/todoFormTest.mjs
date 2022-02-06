describe('Component testing', function () {
  browser.baseUrl = browser.baseUrl || 'http://localhost:3000';

  let component;
  before(async browser => {
    component = await browser.mountReactComponent('/src/components/Form.jsx');
  })

  it('testing todo heading component', function (browser) {
    browser.expect(component).to.be.visible;

    expect(component.find('label[for="new-todo-input"]')).text.toContain('What needs to be done?');
  });
});
