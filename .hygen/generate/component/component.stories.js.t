---
to: components/<%= level %>/<%= h.changeCase.camelCase(name) %>/<%= h.changeCase.camelCase(name) %>.stories.js
---
export default {
  title: '<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
}

export const Basic = ({}) => ({
  component: { <%= h.changeCase.pascalCase(name) %> },
  template: `<<%= h.changeCase.pascalCase(name) %> />`
})
