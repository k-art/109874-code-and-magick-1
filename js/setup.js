'use strict';

(function () {

  // Открытие/закрытие окна настройки персонажа

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');
  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;
  var setapStartY;
  var setapStartX;


  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEY_CODE && evt.currentTarget !== setupUserName) {
      closePopup();
    }
    evt.stopPropagation();
  }

  function openPopup() {
    setup.classList.remove('hidden');
    setupUserName.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onPopupEscPress);
    setapStartY = setup.offsetTop;
    setapStartX = setup.offsetLeft;
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = setapStartY + 'px';
    setup.style.left = setapStartX + 'px';
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      closePopup();
    }
  });

  // Изменения свойств персонажа по нажатию

  var setupWizard = document.querySelector('.setup-wizard');
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

  function colourElement(evt, colors, inputHidden) {
    var randomColor = selectRandomElement(colors);

    if (evt.target.style.fill === randomColor || evt.target.style.backgroundColor === randomColor) {
      randomColor = selectRandomElement(colors);
    }
    if (evt.target === wizardCoat || evt.target === wizardEyes) {
      evt.target.style.fill = randomColor;
    }
    evt.target.style.backgroundColor = randomColor;
    inputHidden.value = randomColor;
  }

  wizardCoat.addEventListener('click', function (evt) {
    colourElement(evt, COAT_COLORS, inputHiddenCoatColor);
  });
  wizardCoat.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      colourElement(evt, COAT_COLORS, inputHiddenCoatColor);
    }
  });

  wizardEyes.addEventListener('click', function (evt) {
    colourElement(evt, EYES_COLORS, inputHiddenEyesColor);
  });
  wizardEyes.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      colourElement(evt, COAT_COLORS, inputHiddenCoatColor);
    }
  });

  wizardFireball.addEventListener('click', function (evt) {
    colourElement(evt, FIREBALL_COLORS, inputHiddenFireballColor);
  });
  wizardFireball.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      colourElement(evt, COAT_COLORS, inputHiddenCoatColor);
    }
  });


  // Отрисовка похожих персонажей

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
