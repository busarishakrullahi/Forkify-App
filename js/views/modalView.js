class ModalView {
  _modalWindow = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _openModaBtn = document.querySelector('.add-recipe');
  _closeModalBtn = document.querySelector('.btn--close');

  constructor() {
    this._openModalWindow();
    this._closeModalWindow();
  }

  _toggle() {
    this._overlay.classList.toggle('hidden');
    this._modalWindow.classList.toggle('hidden');
  }

  _openModalWindow() {
    this._openModaBtn.addEventListener('click', this._toggle().bind(this));
  }

  _closeModalWindow() {
    this._overlay.addEventListener('click', this._toggle().bind(this));
    this._closeModalBtn.addEventListener('click', this._toggle().bind(this));
  }
}

export default new ModalView();
