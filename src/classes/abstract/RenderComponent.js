import Handlebars from "handlebars";
import Button from "components/Button/index.js";
import IconButton from "components/IconButton/index.js";
import SubmitButtonsBlock from "components/SubmitButtonsBlock/index.js";
import Input from "components/Input/index.js";
import Form from "components/Form/index.hbs?raw";

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('IconButton', IconButton);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('SubmitButtonsBlock', SubmitButtonsBlock);
Handlebars.registerPartial('Form', Form);

export default class RenderComponent {
  constructor(container, content, settings) {
    if (new.target.name === RenderComponent) {
      throw new Error('RenderComponent is a class for extends only.');
    }

    this._container = container;
    this._content = content;
    this.settings = settings;
  }

  render() {
    const template = Handlebars.compile(this._content);
    this._container.innerHTML = template(this.settings);

    this.attachEventListeners();
  }

  attachEventListeners() {
    throw new Error('"attachEventListeners" method must be overridden in the child class.');
  }
};
