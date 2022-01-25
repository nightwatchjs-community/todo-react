describe('Component testing', function () {
  browser.baseUrl = browser.baseUrl || 'http://localhost:3000';

  it('testing todo heading component', async function (browser) {
    const component = await browser.mountReactComponent(
      '/src/components/Form.jsx'
    );
    browser.assert.ok(component, 'component is rendered');
    const labelEl = await component.findElement('label[for="new-todo-input"]');
    expect(labelEl).text.toContain('What needs to be done?');
  });
});
