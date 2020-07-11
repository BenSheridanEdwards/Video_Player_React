import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import axios from "axios";

import App from "./App";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

it("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

it("renders the VideoDetail component", () => {
  const wrapper = setup({}, { videos: [], selectedVideo: null });
  const appComponent = findByTestAttr(wrapper, "component-video-detail");
  expect(appComponent.length).toBe(1);
});

it("renders the VideoList component", () => {
  const wrapper = setup({}, { videos: [], selectedVideo: null });
  const appComponent = findByTestAttr(wrapper, "component-video-list");
  expect(appComponent.length).toBe(1);
});

it("successfully fetches data from Youtube's data API", async () => {
  const data = {
    items: []
  };
  const wrapper = setup({}, { videos: [], selectedVideo: null });

  axios.get.mockImplementationOnce(() => Promise.resolve(data));

  await expect(wrapper.instance().fetchData("Cat")).resolves.toEqual(data);

  expect(axios.get).toHaveBeenCalledWith(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        maxResults: 5,
        part: "snippet",
        q: "Cat",
        type: "video"
      }
    }
  );
});

it("erroneously fetches data from YouTube's data API", async () => {
  const errorMessage = "Network Error";
  const wrapper = setup({}, { videos: [], selectedVideo: null });

  axios.get.mockImplementationOnce(() =>
    Promise.reject(new Error(errorMessage))
  );

  await expect(wrapper.instance().fetchData("Cat")).rejects.toThrow(
    errorMessage
  );
});

describe("when a video has been selected", () => {
  let componentApp;
  beforeEach(() => {
    componentApp = mount(<App />);
  });

  afterEach(() => {
    componentApp.unmount();
  });

  it("should set the selected video on the state object", () => {
    const video = { snippet: { title: "cat video" }, id: { videoId: "1" } };
    componentApp.instance().onVideoSelect(video);
    expect(componentApp.state()).toEqual({
      selectedVideo: { id: { videoId: "1" }, snippet: { title: "cat video" } },
      videos: []
    });
  });
});
