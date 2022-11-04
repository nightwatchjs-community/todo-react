import FilterButton from '../../../src/components/FilterButton.jsx';
import { fireEvent, within } from '@testing-library/dom';

export default {
  title: 'Filter Button',
  component: FilterButton
};

export const NamedButton = Object.assign(() => <FilterButton name='Button' />, {
  test: async (browser, { component, result }) => {
    await expect(component).to.be.visible;
    await expect(component).text.to.contain('Button');
  }
});

export const ClickedButton = Object.assign(
  () => <FilterButton name='Filter' isPressed={true} />,
  {
    async test(browser, { component }) {
      await expect(component).to.be.visible;
      await expect(component)
        .to.have.property('ariaPressed')
        .which.equals('true');
    }
  }
);
