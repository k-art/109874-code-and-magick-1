'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var NUMBER_OF_WIZARDS = 4;

  function selectRandomElement(data) {
    var index = Math.floor(Math.random() * data.length);
    return data[index];
  }

  function createRandomWizardsData(number) {
    var wizardsData = [];
    for (var i = 0; i < number; i++) {
      wizardsData[i] = {};
      wizardsData[i].name = selectRandomElement(WIZARD_NAMES) + ' ' + selectRandomElement(WIZARD_SURNAMES);
      wizardsData[i].coatColor = selectRandomElement(WIZARD_COAT_COLORS);
      wizardsData[i].eyesColor = selectRandomElement(WIZARD_EYES_COLORS);
    }
    return wizardsData;
  }

  var wizards = createRandomWizardsData(NUMBER_OF_WIZARDS);

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
