import SubmitButtonsBlock from "./components/SubmitButtonsBlock/index";
import Input from "./components/Input/index";
import Form from "./index.hbs?raw";

import { TPartialComponentsArray } from "utils/constants/types";

const formComponents: TPartialComponentsArray = [
  {
    name: "Input",
    component: Input,
  },
  {
    name: "SubmitButtonsBlock",
    component: SubmitButtonsBlock,
  },
  {
    name: "Form",
    component: Form,
  },
];

export default formComponents;
