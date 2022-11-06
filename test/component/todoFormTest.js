describe('Render React Component test', function () {
  it('checks the react component', async function (browser) {
    const formComponent = await browser.mountComponent(
      '/src/components/Form.jsx',
      {}
    );
    await browser.expect.element(formComponent).to.be.visible;
  });
});
