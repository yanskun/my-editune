import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/atoms/Switch"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("Switch", () => {
  test("snapshot true", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: true
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("snapshot false", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: false
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
