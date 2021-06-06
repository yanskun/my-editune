---
to: test/<%= level %>/<%= h.changeCase.pascalCase(name) %>.spec.js
---
import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueCompositionApi from "@vue/composition-api"
import ElementUI from "element-ui"
import Component from "~/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>"

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(ElementUI)

describe("<%= h.changeCase.pascal(name) %>", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {},
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
