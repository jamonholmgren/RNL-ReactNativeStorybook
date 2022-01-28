import * as React from "react"
import { StoryScreen, Story, UseCase } from "../../../.storybook/views"
import { Wallpaper } from "./wallpaper"

declare let module

export default {
  title: "Wallpaper",
  decorators: [(fn) => <StoryScreen>{fn()}</StoryScreen>],
}

export const StylePresets = () => (
  <Story>
    <UseCase text="default/stretch" usage="Full screen wallpaper image.">
      <Wallpaper />
    </UseCase>
  </Story>
)
