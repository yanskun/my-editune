import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/molecules/HighlightJson"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("HighlightJson", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        json: {
          string: "value",
          number: 0,
          boolean: false
        }
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
