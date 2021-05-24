import { shallowMount } from "@vue/test-utils"
import Component from "~/components/molecules/SwitchWithLabel"

describe("SwitchWithLabel", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      props: {
        value: true,
        label: "test"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
