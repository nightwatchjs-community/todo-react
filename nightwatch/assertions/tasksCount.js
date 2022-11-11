// This is more like an example of how to create custom assertions. The same functionality
//   could be very well achieved with using "elementsCount" assertion.
import path from 'path';

export default {
  assertion: function(selector, expectedCount) {
    this.options = () => {
      return {
        elementSelector: true
      }
    };

    this.expected = () => (this.negate ? `does not count ${this.count}` : `counts ${this.count}`);

    this.formatMessage = () => {
      const message = this.message || `Testing if the element count for %s ${this.negate ? 'is not %s' : 'is %s'}`;

      return {
        message,
        args: [this.elementSelector, expectedCount]
      };
    }

    this.evaluate = (value) => value === expectedCount;

    this.value = (result = {}) => {
      if (!result || !result.value) {
        return '';
      }

      return result.value.length;
    };

    this.command = async (callback) => {
      await this.api.findElements(selector, callback);
    };
  }
}