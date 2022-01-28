import * as React from "react"
import { StoryScreen, Story, UseCase } from "../../../.storybook/views"
import { GradientBackground } from "./gradient-background"

declare let module

export default {
  title: "GradientBackground",
  decorators: [(fn) => <StoryScreen>{fn()}</StoryScreen>],
}

export const StylePresets = () => (
  <Story>
    <UseCase text="default/stretch" usage="Full screen background gradient.">
      <GradientBackground colors={["#422443", "#281b34"]} />
    </UseCase>
  </Story>
)
