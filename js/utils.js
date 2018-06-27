'use strict';

window.utils = (function () {
  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  return {
    isEnterPressed: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },

    isEscPressed: function (evt) {
      return evt.keyCode && evt.keyCode === ESC_KEY_CODE;
    },

    selectRandomElement: function (data) {
      var index = Math.floor(Math.random() * data.length);
      return data[index];
    }

  };
})();

