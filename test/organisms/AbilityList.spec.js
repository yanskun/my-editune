import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueCompositionApi from "@vue/composition-api"
import ElementUI from "element-ui"
import Component from "~/components/organisms/AbilityList"

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(ElementUI)

describe("AbilityList", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        abilities: [{
          value: false,
          label: "test",
          key: "test"
        },
        {
          value: 1,
          label: "test",
          key: "test"
        }]
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
