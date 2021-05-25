import { shallowMount } from "@vue/test-utils"
import Component from "~/components/molecules/InputWithLabel.vue"

describe("InputWithLabel", () => {
  test("snapshot text", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: "test",
        label: "test label"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("snapshot number", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        label: "test label",
        value: 0,
        type: "number"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
