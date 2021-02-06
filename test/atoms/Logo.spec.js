import { shallowMount } from '@vue/test-utils'
import Component from '~/components/atoms/Logo'

describe('Logo', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      props: {},
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
