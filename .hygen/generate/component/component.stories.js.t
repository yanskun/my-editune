---
to: components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.js
---
import { withKnobs } from "@storybook/addon-knobs"
import <%= h.changeCase.pascalCase(name) %> from "."

export default {
  title: "<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { <%= h.changeCase.pascalCase(name) %> },
    props: {},
    template: `
      <<%= h.changeCase.pascalCase(name) %> />
    `
  }
}
