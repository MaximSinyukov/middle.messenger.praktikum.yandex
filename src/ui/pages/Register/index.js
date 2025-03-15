import RenderComponent from "abstract/RenderComponent";
import RegisterTemplate from "./index.hbs?raw";

export default class Register extends RenderComponent {
  constructor(container) {
    super(container, RegisterTemplate, {
      formData: {
        title: 'Регистрация',
        inputs: [
          {
            title: 'Почта',
            typeInput: 'email',
            name: 'email',
          },
          {
            title: 'Логин',
            name: 'login',
          },
          {
            title: 'Имя',
            name: 'first_name',
          },
          {
            title: 'Фамилия',
            name: 'second_name',
          },
          {
            title: 'Телефон',
            typeInput: 'tel',
            name: 'phone',
          },
          {
            title: 'Пароль',
            typeInput: 'password',
            name: 'password',
          },
          {
            title: 'Пароль (ещё раз)',
            typeInput: 'password',
            name: 'password',
          },
        ],
        buttonsData: {
          blockClass: 'register__btns-container',
          buttons: [
            {
              type: 'submit',
              classes: 'button--fill',
              title: 'Создать профиль',
            },
            {
              type: 'button',
              classes: 'button--text',
              title: 'Войти',
            },
          ],
        },
      },
    });
  }


  attachEventListeners() {
    console.log('TODO everething is ok!');
  }
};
