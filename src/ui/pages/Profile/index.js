import RenderComponent from "abstract/RenderComponent";
import ProfileTemplate from "./index.hbs?raw";

import formData from './utils/constants/form-data';
import componentData from "./utils/constants/component-data";

export default class Profile extends RenderComponent {
  constructor(container) {
    super(container, ProfileTemplate, {
      ...componentData,
      formData: formData.default,
    });
  }

  attachEventListeners() {
    const profileButtons = document.querySelectorAll('.profile__button');

    profileButtons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();

        if (evt.target.dataset.button) {
          this._changeMode(evt.target.dataset.button);
        }
      });
    });
  }

  _changeMode(mode) {
    this.settings = {
      ...componentData,
      formData: formData[mode],
    };

    this.render();
  }
};
