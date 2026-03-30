// аргументами слушателя может быть что угодно
type TListener<T = unknown> = (...args: T[]) => void;

export default class EventBus<T = unknown> {
  private _listeners: { [key: string]: TListener<T>[] } = {};

  constructor() {
    this._listeners = {};
  }

  subscribe(event: string, callback: TListener<T>): void {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event].push(callback);
  }

  unsubscribe(event: string, callback: TListener<T>): void {
    if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event] = this._listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, ...args: T[]): void {
    if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
