import { createLocalVue, shallowMount } from "@vue/test-utils"
import ElementUI from "element-ui"
import Component from "~/components/organisms/AbilityList"

const localVue = createLocalVue()
localVue.use(ElementUI)

describe("AbilityList", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        abilities: [{
          value: false,
          label: "test"
        },
        {
          value: 1,
          label: "test"
        }]
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
