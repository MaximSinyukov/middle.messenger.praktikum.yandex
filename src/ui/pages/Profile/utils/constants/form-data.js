const inputsBase = [
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
    title: 'Имя в чате',
    name: 'display_name',
  },
  {
    title: 'Телефон',
    typeInput: 'tel',
    name: 'phone',
  },
];

const inputBaseClasses = {
  formClass: 'profile__form',
  titleClass: 'profile__title',
  inputListClass: 'profile__input-list',
  allInputClass: 'profile__input',
  allLabelClass: 'profile__label',
};

const submitButtonsData = {
  blockClass: 'profile__edit-container',
  buttons: [
    {
      type: 'submit',
      classes: 'button--fill',
      title: 'Сохранить',
    },
    {
      type: 'button',
      classes: 'button--text',
      title: 'Отмена',
    },
  ],
};

export default {
  default: {
    ...inputBaseClasses,
    title: 'Иван',
    inputs: inputsBase,
    buttonsData: {
      blockClass: 'profile__default-container',
      buttons: [
        {
          type: 'button',
          classes: 'button--text--active profile__default-button',
          title: 'Изменить данные',
        },
        {
          type: 'button',
          classes: 'button--text--active profile__default-button',
          title: 'Изменить пароль',
        },
        {
          type: 'button',
          classes: 'button--text--danger profile__default-button',
          title: 'Выйти',
        },
      ],
    },
  },
  edit: {
    ...inputBaseClasses,
    inputs: inputsBase,
    buttonsData: submitButtonsData,
  },
  password: {
    ...inputBaseClasses,
    inputs: [
      {
        title: 'Старый пароль',
        typeInput: 'password',
        name: 'oldPassword',
      },
      {
        title: 'Новый пароль',
        typeInput: 'password',
        name: 'newPassword',
      },
      {
        title: 'Повторите новый пароль',
        typeInput: 'password',
        name: 'passwordCheck',
      },
    ],
    buttonsData: submitButtonsData,
  },
};
