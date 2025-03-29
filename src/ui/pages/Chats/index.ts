import RenderComponent from "src/classes/abstract/RenderComponent";
import ChatsTemplate from "./index.hbs?raw";

export default class Chats extends RenderComponent {
  constructor(container: HTMLElement) {
    super(container, ChatsTemplate);
  }

  attachEventListeners() {
    console.log("TODO: create listeners in next sprint");
  }
}
