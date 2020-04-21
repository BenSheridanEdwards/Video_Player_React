import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import App from './App';
import VideoList from './VideoList';

const defaultProps = {
  video: null,
  onVideoSelect: App.onVideoSelect
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<VideoList { ...setupProps } />)
}

it('does not throw warning with expected props', () => {
  checkProps(VideoList, defaultProps)
})

it('renders a video item list', () => {
  const wrapper = setup({ videos: [] })
  const videoItemList = findByTestAttr(wrapper, 'video-item-list')
  expect(videoItemList.length).toBe(1)
})

// it('renders a video item component', () => {
//   const wrapper = setup({ videos: [ { video: { id: { videoId: "123" } } }] })
//   const videoItemComponent = findByTestAttr(wrapper, 'component-video-item')
//   expect(videoItemComponent.length).toBe(1)
// })