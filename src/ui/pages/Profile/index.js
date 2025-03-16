import RenderComponent from "abstract/RenderComponent";
import ProfileTemplate from "./index.hbs?raw";

import formData from './utils/constants/form-data';
import imageIcon from 'static/svg/image.svg';

export default class Profile extends RenderComponent {
  constructor(container) {
    super(container, ProfileTemplate, {
      image: {
        src: imageIcon,
        isReadyForEdit: true,
      },
      formData: formData.default,
    });
  }


  attachEventListeners() {
    console.log('TODO everething is ok!');
  }
};
