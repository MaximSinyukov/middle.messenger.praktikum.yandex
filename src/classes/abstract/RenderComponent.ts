import Handlebars from "handlebars";
import universalComponents from "components/index";

import { TPartialComponentsArray } from "utils/constants/types";

interface IRenderComponent {
  settings: object;
}

export default abstract class RenderComponent implements IRenderComponent {
  private readonly _container: HTMLElement;
  private readonly _content: string;
  private readonly _handlebarsPartials: TPartialComponentsArray;
  private readonly _additionPartials: TPartialComponentsArray | undefined;
  public settings: object;

  constructor(
    container: HTMLElement,
    content: string,
    settings: object,
    additionPartials?: TPartialComponentsArray
  ) {
    this._container = container;
    this._content = content;
    this._handlebarsPartials = universalComponents;
    this._additionPartials = additionPartials;
    this.settings = settings;
  }

  public render() {
    this.registerPartials();

    const template = Handlebars.compile(this._content);
    this._container.innerHTML = template(this.settings);

    this.attachEventListeners();
  }

  protected abstract attachEventListeners(): void;

  private registerPartials() {
    const pagePartials = [
      ...(this._additionPartials || []),
      ...this._handlebarsPartials,
    ];

    pagePartials.forEach(({ name, component }) => {
      Handlebars.registerPartial(name, component);
    });
  }
}
