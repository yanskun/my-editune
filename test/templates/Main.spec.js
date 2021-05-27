import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/templates/Top"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("Top", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {},
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
