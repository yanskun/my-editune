import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/molecules/InputWithLabel.vue"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("InputWithLabel", () => {
  test("snapshot text", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: "test",
        label: "test label"
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("snapshot number", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        label: "test label",
        value: 0,
        type: "number"
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
