import '!style-loader!css-loader!element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import Element from 'element-ui'
import VueCompositionAPI from '@vue/composition-api'


Vue.use(Element)
Vue.use(VueCompositionAPI)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
