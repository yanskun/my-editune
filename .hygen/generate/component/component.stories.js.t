---
to: components/<%= level %>/<%= .changeCase.pascalCase(name) %>/<%= .changeCase.pascalCase(name) %>.stories.js
---
import { withKnobs } from "@storybook/addon-knobs"
import <%= h.changeCase.pascalCase(name) %> from '.'

export default {
  title: '<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>',
  decorators: [withKnobs]
}

const export Basic = () => {
  return {
    components: { <%= h.changeCase.pascalCase(name) %> },
    props: {},
    template: `
      <<%= h.changeCase.pascalCase(name) %> />
    `,
  }
}
