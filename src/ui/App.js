import Handlebars from "handlebars";
// import * as Pages from 'pages';

export default class App {
  constructor() {
    this.currentPage = 'Login';
    this.appElement = document.getElementById('app');
  }

  // использовать мтеод рендер внутри класса компонента, там же будут его настройки и такой же метод рендер
  // вызов класса элемента тут с прокидыванием в него компонента рутового
  // const classes = { first: MyFirstClass, second: MySecondClass };
  // const instance = new classes["first"]();

  // сделать ссылки на страницы прямо в html / стили прописать там же
  // тут навешивать слушатели и смено рендера

  render() {
    // const renderPage = new Pages[this.currentPage](this.appElement);
    // renderPage.render();
    this.attachEventListeners();
    // let template = Handlebars.compile(Pages[this.currentPage]);
    // this.appElement.innerHTML = template();
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
