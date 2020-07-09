import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

import App from "./App";
import VideoItem from "./VideoItem";

const defaultProps = {
  video: null,
  onVideoSelect: App.onVideoSelect
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<VideoItem {...setupProps} />);
};

it("does not throw warning with expected props", () => {
  checkProps(VideoItem, defaultProps);
});

it("renders a video item component", () => {
  const wrapper = setup(
    {
      video: {
        snippet: { thumbnails: { medium: { url: "www.video.com" } } },
        id: { videoId: "123" }
      }
    },
    { onVideoSelect: App.onVideoSelect }
  );
  const videoItemComponent = findByTestAttr(wrapper, "component-video-item");
  expect(videoItemComponent.length).toBe(1);
});

it("renders a video item's title", () => {
  const wrapper = setup(
    {
      video: {
        snippet: {
          thumbnails: { medium: { url: "www.video.com" } },
          title: "videoTitle"
        },
        id: { videoId: "123" }
      }
    },
    { onVideoSelect: App.onVideoSelect }
  );
  const videoItemTitle = findByTestAttr(wrapper, "video-item-title");
  expect(videoItemTitle.text()).toEqual("videoTitle");
});

it("should call onVideoSelect when a video is selected", () => {
  const mockFunction = jest.fn();
  const component = mount(
    <VideoItem
      video={{
        snippet: { title: "123", thumbnails: { medium: { url: "23" } } }
      }}
      onVideoSelect={mockFunction}
    />
  );
  component
    .find("div")
    .at(0)
    .simulate("click");
  expect(mockFunction).toHaveBeenCalled();
  component.unmount();
});
