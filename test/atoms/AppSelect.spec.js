import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/atoms/AppSelect"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("AppSelect", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: "",
        placeholder: "placeholder",
        options: [
          { value: "value1", label: "option1" },
          { value: "value2", label: "option2" }
        ]
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
