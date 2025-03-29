import Handlebars from "handlebars";
import universalComponents from "components/index";

import { TPartialComponentsArray } from "utils/constants/types";

interface IRenderComponent {
  settings?: object;
}

export default abstract class RenderComponent implements IRenderComponent {
  private readonly _container: HTMLElement;
  private readonly _content: string;
  private _handlebarsPartials: TPartialComponentsArray;
  public settings: object | undefined;

  constructor(container: HTMLElement, content: string, settings?: object) {
    this._container = container;
    this._content = content;
    this._handlebarsPartials = universalComponents;
    this.settings = settings;
  }

  public render() {
    this.registerPartials();

    const template = Handlebars.compile(this._content);
    this._container.innerHTML = template(this.settings);

    this.attachEventListeners();
  }

  protected abstract attachEventListeners(): void;

  protected addPagePartials?(pagePartials: TPartialComponentsArray): void {
    this._handlebarsPartials = [...this._handlebarsPartials, ...pagePartials];
  }

  private registerPartials() {
    this._handlebarsPartials.forEach(({ name, component }) => {
      Handlebars.registerPartial(name, component);
    });
  }
}
