import { shallowMount } from '@vue/test-utils'
import Component from '~/components/atoms/select'

describe('Select', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      props: {},
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
