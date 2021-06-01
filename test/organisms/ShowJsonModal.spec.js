import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/organisms/ShowJsonModal"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("ShowJsonModal", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        abilities: [],
        open: true,
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
