import RenderComponent from "abstract/RenderComponent";
import ErrorTemplate from "./index.hbs?raw";

export default class Error extends RenderComponent {
  constructor(container, errorCode) {
    super(container, ErrorTemplate, {

    });
  }


  attachEventListeners() {
    console.log('TODO everething is ok!');
  }
};
