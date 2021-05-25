import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/atoms/AppButton"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("AppButton", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        type: "primary"
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
