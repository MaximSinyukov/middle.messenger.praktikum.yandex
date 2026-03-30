import RenderComponent from "src/classes/abstract/RenderComponent";
import LoginTemplate from "./index.hbs?raw";

export default class Login extends RenderComponent {
  constructor(container: HTMLElement) {
    super(container, LoginTemplate, {
      formData: {
        title: "Вход",
        inputs: [
          {
            title: "Логин",
            name: "login",
            placeholder: "Логин",
          },
          {
            title: "Пароль",
            typeInput: "password",
            name: "password",
            placeholder: "Пароль",
          },
        ],
        buttonsData: {
          blockClass: "login__btns-container",
          buttons: [
            {
              type: "submit",
              classes: "button--fill",
              title: "Войти",
            },
            {
              type: "button",
              classes: "button--text--active",
              title: "Нет профиля?",
            },
          ],
        },
      },
    });
  }

  attachEventListeners() {
    console.log("TODO: create listeners in next sprint");
  }
}
