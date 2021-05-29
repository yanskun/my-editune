import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/molecules/ShowJsonModal"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("ShowJsonModal", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        abilities: [],
        open: true
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
