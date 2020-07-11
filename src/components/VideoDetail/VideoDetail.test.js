import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";

import VideoDetail from "./VideoDetail";

const defaultProps = {
  video: null
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<VideoDetail {...setupProps} />);
};

it("does not throw warning with expected props", () => {
  checkProps(VideoDetail, defaultProps);
});

describe("if the user hasn't selected a video", () => {
  it("renders a loading message when there is no video", () => {
    const wrapper = setup({ video: null });
    const message = findByTestAttr(wrapper, "loading-message");
    expect(message.length).toBe(1);
    expect(message.text()).toEqual("Loading...");
  });
});

describe("if the user has selected a video", () => {
  it("renders the video detail component", () => {
    const wrapper = setup({
      video: { snippet: { title: "video" }, id: { videoId: "123" } }
    });
    const videoDetailComponent = findByTestAttr(
      wrapper,
      "component-video-detail"
    );
    expect(videoDetailComponent.length).toBe(1);
  });
});
