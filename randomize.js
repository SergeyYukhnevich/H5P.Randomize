var H5P = H5P || {};

/**
 * Randomize contains helper function relevant for randomizing array of questions.
 */
H5P.Randomize = (function() {

  /**
   * Randomize array of elements.
   *
   * @param {Object} options      Library options.
   * @param {string} contentProp  Name of the property which contains elements that needs to be randomized.
   * @return {null}
   */
  return function(options, contentProp) {
    if (
      !options ||
      !options.randomizeQuestions ||
      !options[contentProp] ||
      !Array.isArray(options[contentProp])
    ) return;

    var temp = _shuffle(options[contentProp]);

    if (options.randomQuestionsAmount) {
      options[contentProp] = temp.slice(0, parseInt(options.randomQuestionsAmount));

      return;
    }

    options[contentProp] = temp;
  };

  /**
   * Sort array in random order using Fisher–Yates shuffle algorithm.
   *
   * @private
   * @param  {array} list Array of elements to be sorted.
   * @return {array}      Sorted in random order array.
   */
  function _shuffle(list) {
    var counter = list.length,
        index, temp;

      while (counter > 0) {
        index = Math.floor(Math.random() * counter);

        counter--;

        temp = list[counter];
        list[counter] = list[index];
        list[index] = temp;
      }

      return list;
  }

})();
