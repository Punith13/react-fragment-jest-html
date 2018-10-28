import React from 'react'
import renderer from 'react-test-renderer'
import AppReactFragment from '../AppReactFragment'
import App from '../App'

describe('Test App with React Fragment', () => {
  it('renders app', () => {
    const tree = renderer.create(<AppReactFragment />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('Test App without React Fragment', () => {
  it('renders app', () => {
    const tree = renderer.create(<App />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
