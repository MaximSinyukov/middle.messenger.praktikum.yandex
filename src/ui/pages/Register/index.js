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
            placeholder: 'Почта',
          },
          {
            title: 'Логин',
            name: 'login',
            placeholder: 'Почта',
          },
          {
            title: 'Имя',
            name: 'first_name',
            placeholder: 'Имя',
          },
          {
            title: 'Фамилия',
            name: 'second_name',
            placeholder: 'Фамилия',
          },
          {
            title: 'Телефон',
            typeInput: 'tel',
            name: 'phone',
            placeholder: 'Телефон',
          },
          {
            title: 'Пароль',
            typeInput: 'password',
            name: 'password',
            placeholder: 'Пароль',
          },
          {
            title: 'Пароль (ещё раз)',
            typeInput: 'password',
            name: 'passwordCheck',
            placeholder: 'Пароль (ещё раз)',
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
              classes: 'button--text--active',
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
