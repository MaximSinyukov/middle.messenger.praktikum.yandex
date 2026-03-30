import Handlebars from "handlebars";
import { Login, Register, Error, Chats, Profile } from "pages/index";
import PageLinks from "modules/PageLinks/index.hbs?raw";

interface IHandlebarsContext {
  links: { title: string; page: string; attribute?: string }[];
  currentPage: string;
  currentAttribute?: string;
}

interface IApp {
  currentPage: PagesEnum;
  appElement: HTMLElement | null;
  pageAttribute: number | undefined;
}

enum PagesEnum {
  Login = "Login",
  Register = "Register",
  Error = "Error",
  Chats = "Chats",
  Profile = "Profile",
}

Handlebars.registerHelper(
  "ifEquals",
  function (
    this: IHandlebarsContext,
    arg1: number | undefined,
    arg2: number | undefined,
    options: Handlebars.HelperOptions
  ) {
    return arg1 === arg2 ? options.fn(this) : "";
  }
);

const Pages = {
  [PagesEnum.Login]: Login,
  [PagesEnum.Register]: Register,
  [PagesEnum.Error]: Error,
  [PagesEnum.Chats]: Chats,
  [PagesEnum.Profile]: Profile,
};

const linksData = {
  links: [
    {
      title: "Вход",
      page: PagesEnum.Login,
    },
    {
      title: "Регистрация",
      page: PagesEnum.Register,
    },
    {
      title: "Ошибка 404",
      page: PagesEnum.Error,
      attribute: 404,
    },
    {
      title: "Ошибка 500",
      page: PagesEnum.Error,
      attribute: 500,
    },
    {
      title: "Ошибка 600",
      page: PagesEnum.Error,
      attribute: 600,
    },
    {
      title: "Чаты",
      page: PagesEnum.Chats,
    },
    {
      title: "Профиль",
      page: PagesEnum.Profile,
    },
  ],
};

export default class App implements IApp {
  public currentPage: PagesEnum;
  public appElement: HTMLElement | null;
  public pageAttribute: number | undefined;

  constructor() {
    this.currentPage = PagesEnum.Chats;
    this.appElement = document.getElementById("app");
    this.pageAttribute = undefined;
  }

  render() {
    if (!this.appElement) return;

    const renderPage = new Pages[this.currentPage](
      this.appElement,
      Number(this.pageAttribute)
    );
    renderPage.render();

    this._attachLinks();
  }

  _attachEventListeners() {
    const links = document.querySelectorAll(".page-links__link");

    links.forEach((link) => {
      link.addEventListener("click", (evt) => {
        evt.preventDefault();

        const targetElement = evt.target as HTMLElement;
        this._changePage(
          targetElement.dataset.page as PagesEnum,
          Number(targetElement.dataset.pageAttribute)
        );
      });
    });
  }

  _attachLinksRerender() {
    const links = document.querySelectorAll(".profile__button");

    links.forEach((link) => {
      link.addEventListener("click", (evt) => {
        evt.preventDefault();
        this._attachLinks();
      });
    });
  }

  _attachLinks() {
    const pageLinksTemplate = Handlebars.compile(PageLinks);

    if (this.appElement) {
      this.appElement.insertAdjacentHTML(
        "beforeend",
        pageLinksTemplate({
          ...linksData,
          currentPage: this.currentPage,
          currentAttribute: this.pageAttribute,
        })
      );
    }

    this._attachEventListeners();
    this._attachLinksRerender();
  }

  _changePage(pageName: PagesEnum, pageAttribute?: number) {
    this.currentPage = pageName;
    this.pageAttribute = pageAttribute || undefined;

    this.render();
  }
}
