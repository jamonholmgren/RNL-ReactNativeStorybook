import React, { useEffect } from "react"
import { getStorybookUI } from "@storybook/react-native"
import { initFonts } from "../app/theme/fonts"

import "./storybook.requires"

export default StorybookUIRoot

// declare let module
declare var __TEST__: any

const StorybookUI = getStorybookUI({})

export function StorybookUIRoot() {
  useEffect(() => {
    ;(async () => {
      await initFonts() // expo only
      if (typeof __TEST__ === "undefined" || !__TEST__) {
        const Reactotron = require("../app/services/reactotron")
        const reactotron = new Reactotron.Reactotron()
        reactotron.setup()
      }
    })()
  }, [])

  return <StorybookUI />
}
