import EventBus from "core/EventBus";

// TODO убрать комменты после окончательной реализации

type TMeta = {
  tagName: string;
  props: Record<PropertyKey, unknown>;
};

interface IBlock {
  props: Record<PropertyKey, unknown>;
}

export default abstract class Block implements IBlock {
  private readonly _meta: null | TMeta = null;
  private _element: null | HTMLElement = null;
  public props: Record<PropertyKey, unknown>;
  public readonly eventBus: () => EventBus;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  constructor(tagName = "div", props: Record<PropertyKey, unknown> = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.subscribe(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.subscribe(
      Block.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    eventBus.subscribe(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this) as (...args: unknown[]) => void
    );
    eventBus.subscribe(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    if (!this._meta) return;

    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: object, newProps: object): void {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (!response) {
      return;
    }

    this._render();
  }

  componentDidUpdate(oldProps: object, newProps: object): boolean {
    return true;
  }

  setProps = (nextProps: unknown): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render(): void {
    if (!this._element) return;

    const block = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    this._element.innerHTML = block;
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  abstract render(): string;

  getContent() {
    return this.element;
  }

  // исходя из документации "target – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции"
  private _makePropsProxy(props: Record<PropertyKey, unknown>) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    const content = this.getContent();

    if (!content) return;

    content.style.display = "block";
  }

  hide() {
    const content = this.getContent();

    if (!content) return;

    content.style.display = "none";
  }
}
