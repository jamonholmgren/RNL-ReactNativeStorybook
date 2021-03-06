/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

const getStories = () => {
  return [
    require("../app/components/auto-image/auto-image.story.tsx"),
    require("../app/components/bullet-item/bullet-item.story.tsx"),
    require("../app/components/button/button.story.tsx"),
    require("../app/components/checkbox/checkbox.story.tsx"),
    require("../app/components/form-row/form-row.story.tsx"),
    require("../app/components/gradient-background/gradient-background.story.tsx"),
    require("../app/components/header/header.story.tsx"),
    require("../app/components/icon/icon.story.tsx"),
    require("../app/components/switch/switch.story.tsx"),
    require("../app/components/text-field/text-field.story.tsx"),
    require("../app/components/text/text.story.tsx"),
    require("../app/components/wallpaper/wallpaper.story.tsx"),
  ];
};

configure(getStories, module, false);
