---
to: components/<%= level %>/<%= h.changeCase.camelCase(name) %>/<%= h.changeCase.camelCase(name) %>.stories.js
---
export default {
  title: '<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>',
}

export const Basic = () => '<<%= h.changeCase.pascalCase(name) %> />'
