---
to: components/<%= level %>/<%= h.changeCase.camelCase(name) %>/<%= h.changeCase.camelCase(name) %>.stories.js
---
import <%= h.changeCase.pascalCase(name) %> from '.'

export default {
  title: '<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { <%= h.changeCase.pascalCase(name) %> },
  template: `<<%= h.changeCase.pascalCase(name) %> v-bind="$props" /> `,
})

export const Basic = Template.bind({})
Basic.args = {}
