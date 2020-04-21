import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos)
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} data-test="component-video-item"/>;
  });


  return <div className="ui relaxed divided list" data-test="video-item-list">{renderedList}</div>
};

export default VideoList;
