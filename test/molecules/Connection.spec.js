import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueCompositionApi from "@vue/composition-api"
import ElementUI from "element-ui"
import Component from "~/components/molecules/Connection"

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(ElementUI)

describe("Connection", () => {
  test("snapshot", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        icons: [
          {
            src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            alt: "GitHub",
            href: "https://github.com/"
          }
        ]
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
