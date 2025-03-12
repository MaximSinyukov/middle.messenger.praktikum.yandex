import Handlebars from "handlebars";
import * as Pages from './pages';

export default class App {
  constructor() {
    this.currentPage = 'Login';
    this.appElement = document.getElementById('app');
  }

  render() {
    let template = Handlebars.compile(Pages[this.currentPage]);
    this.appElement.innerHTML = template();
    this.attachEventListeners();
  }

  _attachEventListeners() {
    const links = document.querySelectorAll('.page-link');

    links.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.currentPage(evt.target.dataset.page);
      });
    });
  }

  _changePage(pageName) {
    this.currentPage = pageName;
    this.render();
  }
};
