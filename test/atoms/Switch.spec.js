import { shallowMount } from "@vue/test-utils"
import Component from "~/components/atoms/Switch"

describe("Switch", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      props: {},
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
