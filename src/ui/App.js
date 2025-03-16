import Handlebars from "handlebars";
import * as Pages from 'pages';
// import DemoLinks from 'modules/DemoLinks';

export default class App {
  constructor() {
    this.currentPage = 'Profile';
    this.appElement = document.getElementById('app');
  }

  // сделать ссылки на страницы прямо в html / стили прописать там же
  // тут навешивать слушатели и смено рендера

  render() {
    const renderPage = new Pages[this.currentPage](this.appElement); // TODO handle errorCode
    renderPage.render();

    // const linksTemplate = Handlebars.compile(DemoLinks);
    // this.appElement.insertAdjacentElement('beforeend', linksTemplate());
    // this.attachEventListeners();
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
