import React from 'react';
import Enzyme, { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import mockAxios from 'axios'

import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

it('renders without error', () =>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

it("renders the VideoDetail component", () =>{
  const wrapper = setup({}, { videos: [], selectedVideo: null });
  const appComponent = findByTestAttr(wrapper, 'component-video-detail');
  expect(appComponent.length).toBe(1);
});

it("renders the VideoList component", () =>{
  const wrapper = setup({}, { videos: [], selectedVideo: null });
  const appComponent = findByTestAttr(wrapper, 'component-video-list');
  expect(appComponent.length).toBe(1);
});

it('calls componentDidMount', () => {
  jest.spyOn(App.prototype, 'componentDidMount')
  const wrapper = shallow(<App />)
  expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
})

it('calls axios and returns youtube videos', async () => {
  mockAxios.get.mockImplementationOnce(() => 
    Promise.resolve({
      data: { 
        items: [] 
      }
    }))
 
  const wrapper = setup()
  const videos = await wrapper.instance().onTermSubmit('cats')
  expect(wrapper.state()).toEqual({"selectedVideo": undefined, "videos": []})
  expect(mockAxios.get).toHaveBeenCalledTimes(6);
  expect(mockAxios.get).toHaveBeenCalledWith("https://www.googleapis.com/youtube/v3/search", {"params": {"key": "AIzaSyAPVtFX1-MfrL_LONvpYCDa3chTzDuRQBc", "maxResults": 5, "part": "snippet", "q": "Cat", "type": "video"}})
})
