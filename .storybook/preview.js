import '!style-loader!css-loader!element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
