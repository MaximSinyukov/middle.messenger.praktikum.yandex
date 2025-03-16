import Handlebars from "handlebars";
import * as Pages from 'pages';
import PageLinks from 'modules/PageLinks/index.hbs?raw';

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return arg1 === arg2
    ? options.fn(this)
    : '';
});

const linksData = {
  links: [
    {
      title: 'Вход',
      page: 'Login',
    },
    {
      title: 'Регистрация',
      page: 'Register',
    },
    {
      title: 'Ошибка 404',
      page: 'Error',
      attribute: '404',
    },
    {
      title: 'Ошибка 500',
      page: 'Error',
      attribute: '500',
    },
    {
      title: 'Ошибка 600',
      page: 'Error',
      attribute: '600',
    },
    {
      title: 'Чаты',
      page: 'Chats',
    },
    {
      title: 'Профиль',
      page: 'Profile',
    },
  ],
};

export default class App {
  constructor() {
    this.currentPage = 'Login';
    this.appElement = document.getElementById('app');
    this.pageAttribute = undefined;
  }

  render() {
    const renderPage = new Pages[this.currentPage](this.appElement, this.pageAttribute);
    renderPage.render();

    this._attachLinks();
  }

  _attachEventListeners() {
    const links = document.querySelectorAll('.page-links__link');

    links.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._changePage(evt.target.dataset.page, evt.target.dataset.pageAttribute);
      });
    });
  }

  _attachLinksRerender() {
    const links = document.querySelectorAll('.profile__button');

    links.forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._attachLinks();
      });
    });
  }

  _attachLinks() {
    const pageLinksTemplate = Handlebars.compile(PageLinks);
    this.appElement.insertAdjacentHTML('beforeend', pageLinksTemplate({
      ...linksData,
      currentPage: this.currentPage,
      currentAttribute: this.pageAttribute,
    }));
    this._attachEventListeners();
    this._attachLinksRerender();
  }

  _changePage(pageName, pageAttribute) {
    this.currentPage = pageName;
    this.pageAttribute = pageAttribute || undefined;

    this.render();
  }
};
