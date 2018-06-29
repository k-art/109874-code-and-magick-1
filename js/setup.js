'use strict';

(function () {

  // Изменения свойств персонажа по нажатию
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var inputHiddenCoatColor = setup.querySelector('#input-hidden-coat-color');
  var inputHiddenEyesColor = setup.querySelector('#input-hidden-eyes-color');
  var inputHiddenFireballColor = setup.querySelector('#input-hidden-fireball-color');

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215,' +
  ' 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.colorize(wizardCoat, COAT_COLORS, inputHiddenCoatColor);
  window.colorize(wizardEyes, EYES_COLORS, inputHiddenEyesColor);
  window.colorize(wizardFireball, FIREBALL_COLORS, inputHiddenFireballColor);


  // Отрисовка похожих персонажей

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var NUMBER_OF_WIZARDS = 4;

  function createRandomWizardsData(number) {
    var wizardsData = [];
    for (var i = 0; i < number; i++) {
      wizardsData[i] = {};
      wizardsData[i].name = window.utils.selectRandomElement(WIZARD_NAMES) + ' ' + window.utils.selectRandomElement(WIZARD_SURNAMES);
      wizardsData[i].coatColor = window.utils.selectRandomElement(WIZARD_COAT_COLORS);
      wizardsData[i].eyesColor = window.utils.selectRandomElement(WIZARD_EYES_COLORS);
    }
    return wizardsData;
  }

  var wizards = createRandomWizardsData(NUMBER_OF_WIZARDS);
  var similarWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardsList = document.querySelector('.setup-similar-list');

  similarWizardsList.appendChild(window.render(wizards, similarWizard, NUMBER_OF_WIZARDS));
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
