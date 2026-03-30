import RenderComponent from "src/classes/abstract/RenderComponent";
import ProfileTemplate from "./index.hbs?raw";

import formData from "./utils/constants/form-data";
import componentData from "./utils/constants/component-data";

type FormMode = keyof typeof formData;

export default class Profile extends RenderComponent {
  constructor(container: HTMLElement) {
    super(container, ProfileTemplate, {
      ...componentData,
      formData: formData.default,
    });
  }

  attachEventListeners() {
    const profileButtons = document.querySelectorAll(".profile__button");

    profileButtons.forEach((button) => {
      button.addEventListener("click", (evt) => {
        evt.preventDefault();

        const targetElement = evt.target as HTMLElement;

        if (targetElement && targetElement.dataset.button) {
          this._changeMode(targetElement.dataset.button as FormMode);
        }
      });
    });
  }

  _changeMode(mode: FormMode): void {
    this.settings = {
      ...componentData,
      formData: formData[mode],
    };

    this.render();
  }
}
