import { shallowMount } from "@vue/test-utils"
import Component from "~/components/molecules/InputWithLabel.vue"

describe("InputWithLabel", () => {
  test("snapshot text", () => {
    const wrapper = shallowMount(Component, {
      props: {
        value: "test",
        label: "test label"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("snapshot number", () => {
    const wrapper = shallowMount(Component, {
      props: {
        label: "test label",
        type: "number"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
