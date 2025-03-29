import Button from "src/ui/components/Button/index";
import IconButton from "components/IconButton/index";
import formComponents from "components/Form/index";

import { TPartialComponentsArray } from "utils/constants/types";

const universalComponents: TPartialComponentsArray = [
  {
    name: "Button",
    component: Button,
  },
  {
    name: "IconButton",
    component: IconButton,
  },
  ...formComponents,
];

export default universalComponents;
