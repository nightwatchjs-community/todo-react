import { fireEvent, within } from '@testing-library/dom';
import Form from '../../../src/components/Form.jsx';

export default {
  title: 'Form Component',
  component: Form,

  // executed before all the individual component stories; runs in Node context
  async setup(browser) {
    console.log('global setup hook', browser.capabilities);
  },

  // executed after all the individual component stories; runs in Node context
  async teardown(browser) {
    console.log('global teardown hook');
  },

  // executed before each individual component story; runs in Node context
  async preRender(browser, context) {
    // context is made of {id, name, title}
    console.log('preRender', context.id);
  },

  // executed after each individual component story; runs in Node context
  async preRender(browser, context) {
    // context is made of {id, name, title}
    console.log('preRender', context.id);
  }
};

export const AnotherForm = Object.assign(
  () => (
    <Form
      addTask={function (value) {
        console.log('Add Task', value);
      }}
    />
  ),
  {
    async play({ canvasElement, args }) {
      console.log('play function', args);

      const root = within(canvasElement);
      const input = root.getByTestId('new-todo-input');

      fireEvent.change(input, {
        target: {
          value: 'another one bites the dust'
        }
      });

      return {
        fromPlay: input
      };
    },

    test: async (browser, { component, result }) => {
      console.log('Result from play', result);
      await expect(component).to.be.visible;

      await expect(component.find('input'))
        .to.have.property('value')
        .equal('another one bites the dust');
    }
  }
);
