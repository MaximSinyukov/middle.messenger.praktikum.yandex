import RenderComponent from "abstract/RenderComponent";
import ProfileTemplate from "./index.hbs?raw";

import formData from './utils/constants/form-data';
import imageIcon from 'static/svg/image.svg';
import arrowLeftIcon from 'static/svg/arrow-left.svg';

export default class Profile extends RenderComponent {
  constructor(container) {
    super(container, ProfileTemplate, {
      image: {
        src: imageIcon,
        isReadyForEdit: true,
      },
      formData: formData.default,
      iconButton: {
        type: 'button',
        buttonClass: 'icon-button--primary',
        icon: {
          src: arrowLeftIcon,
          alt: 'Стрелочка назад',
        },
      },
    });
  }


  attachEventListeners() {
    console.log('TODO everething is ok!');
  }
};
