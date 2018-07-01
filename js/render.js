'use strict';

(function () {
  window.render = function (wizardsData, number) {
    var similarWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var similarWizardsList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var randomSelectedData = window.utils.getRandomElements(wizardsData, number);

    function renderWizard(wizard) {
      var wizardItem = similarWizard.cloneNode(true);

      wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

      return wizardItem;
    }

    for (var i = 0; i < randomSelectedData.length; i++) {
      fragment.appendChild(renderWizard(randomSelectedData[i]));
    }
    similarWizardsList.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
