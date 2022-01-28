import * as React from "react"
import { StoryScreen, Story, UseCase } from "../../../.storybook/views"
import { Icon } from "./icon"

declare let module

export default {
  title: "Icon",
  decorators: [(fn) => <StoryScreen>{fn()}</StoryScreen>],
}

export const Names = () => (
  <Story>
    <UseCase text="back" usage="The icon for going back">
      <Icon icon="back" />
    </UseCase>
    <UseCase text="bullet" usage="The icon for a bullet point">
      <Icon icon="bullet" />
    </UseCase>
  </Story>
)
