---
to: test/<%= level %>/<%= h.changeCase.pascalCase(name) %>.spec.js
---
import { shallowMount } from '@vue/test-utils'
import Component from '~/components/atoms/<%= h.changeCase.camelCase(name) %>'

describe('<%= h.changeCase.pascal(name) %>', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      props: {},
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
