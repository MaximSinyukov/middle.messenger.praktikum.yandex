import RenderComponent from "src/classes/abstract/RenderComponent";
import ErrorTemplate from "./index.hbs?raw";

import getErrorData from "./utils/methods/get-error-data";

export default class Error extends RenderComponent {
  constructor(container: HTMLElement, errorCode: number) {
    super(container, ErrorTemplate, { ...getErrorData(errorCode), errorCode });
  }

  attachEventListeners() {
    console.log("TODO: create listeners in next sprint");
  }
}
