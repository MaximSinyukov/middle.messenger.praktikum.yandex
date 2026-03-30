import RenderComponent from "src/classes/abstract/RenderComponent";
import ChatsTemplate from "./index.hbs?raw";
import chatsComponents from "./components/index";

import arrowRightIcon from "svg/arrow-right.svg";

import chatsList from "./utils/constants/chats-list";
import selectedChat from "./utils/constants/selected-chat";

const ChatsData = {
  chatsContainer: {
    profileButton: {
      type: "button",
      classes: "button--text chats__profile-button",
      title: "Профиль",
      iconSrc: arrowRightIcon,
    },
    chatsList,
  },
  selectedChat,
};

export default class Chats extends RenderComponent {
  constructor(container: HTMLElement) {
    super(container, ChatsTemplate, ChatsData, chatsComponents);
  }

  attachEventListeners() {
    console.log("TODO: create listeners in next sprint");
  }
}
