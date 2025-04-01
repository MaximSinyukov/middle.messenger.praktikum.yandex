// аргументами слушателя может быть что угодно
type TArgsCallback = { [key: string]: any };
type TCallback = (args: TArgsCallback) => void;

class EventBus {
  private _listeners: { [key: string]: TCallback[] };

  constructor() {
    this._listeners = {};
  }

  subscribe(event: string, callback: TCallback) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event].push(callback);
  }

  unsubscribe(event: string, callback: TCallback) {
    if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event] = this._listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: string, args: TArgsCallback) {
    if (!this._listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this._listeners[event].forEach((listener) => {
      listener(args);
    });
  }
}
