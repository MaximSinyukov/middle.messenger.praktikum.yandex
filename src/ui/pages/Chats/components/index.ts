import ChatsSection from "./ChatsSection/index.hbs?raw";
import ChatItem from "./ChatItem/index.hbs?raw";
import MessagesSection from "./MessagesSection/index.hbs?raw";
import MessagesFooter from "./MessagesFooter/index.hbs?raw";
import MessagesHeader from "./MessagesHeader/index.hbs?raw";

import { TPartialComponentsArray } from "utils/constants/types";

const chatsComponents: TPartialComponentsArray = [
  {
    name: "ChatsSection",
    component: ChatsSection,
  },
  {
    name: "ChatItem",
    component: ChatItem,
  },
  {
    name: "MessagesSection",
    component: MessagesSection,
  },
  {
    name: "MessagesFooter",
    component: MessagesFooter,
  },
  {
    name: "MessagesHeader",
    component: MessagesHeader,
  },
];

export default chatsComponents;
