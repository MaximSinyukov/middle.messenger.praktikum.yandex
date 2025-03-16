import imageIcon from 'static/svg/image.svg';
import arrowLeftIcon from 'static/svg/arrow-left.svg';

export default {
  image: {
    src: imageIcon,
    isReadyForEdit: true,
  },
  iconButton: {
    type: 'button',
    buttonClass: 'icon-button--primary',
    icon: {
      src: arrowLeftIcon,
      alt: 'Стрелочка назад',
    },
  },
};
