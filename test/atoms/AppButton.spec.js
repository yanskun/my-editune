import { shallowMount } from "@vue/test-utils"
import Component from "~/components/atoms/AppButton"

describe("AppButton", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        type: "primary"
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
