'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  }

  adder.clear = () => {
    sum = 0;
  };

  return adder;
}

module.exports = makeInfinityAdder;
