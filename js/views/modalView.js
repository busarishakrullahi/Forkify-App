import View from './view';

class ModalView extends View {
  _parentEl = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _openModalBtn = document.querySelector('.add-recipe');
  _closeModalBtn = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._openModalWindow();
    this._closeModalWindow();
  }

  _toggle() {
    this._overlay.classList.toggle('hidden');
    this._parentEl.classList.toggle('hidden');
  }

  _openModalWindow() {
    this._openModalBtn.addEventListener('click', this._toggle.bind(this));
  }

  _closeModalWindow() {
    this._overlay.addEventListener('click', this._toggle.bind(this));
    this._closeModalBtn.addEventListener('click', this._toggle.bind(this));
  }

  getInputValueHandler(handler) {
    this._parentEl.addEventListener('click', function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      console.log(data);
      handler();
    });
  }
}

export default new ModalView();
