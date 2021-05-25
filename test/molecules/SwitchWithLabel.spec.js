import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/molecules/SwitchWithLabel"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("SwitchWithLabel", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: true,
        label: "test"
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
