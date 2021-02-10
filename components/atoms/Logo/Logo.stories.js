import Logo from "."

export default {
  title: "Atoms/Logo",
  component: Logo
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: "<Logo v-bind=\"$props\" /> "
})

export const Basic = Template.bind({})
Basic.args = {
  width: 200
}
