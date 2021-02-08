import Logo from '.'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 200,
    },
  },
}

export const Basic = ({ width }) => ({
  component: { Logo },
  template: `<Logo :width="${width}" />`,
})
