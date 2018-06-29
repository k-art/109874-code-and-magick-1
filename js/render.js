'use strict';

(function () {
  window.render = function (wizardsData, similarWizard, number) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < number; i++) {
      fragment.appendChild(renderWizard(wizardsData[i]));
    }
    return fragment;

    function renderWizard(wizard) {
      var wizardItem = similarWizard.cloneNode(true);

      wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

      return wizardItem;
    }
  };
})();
