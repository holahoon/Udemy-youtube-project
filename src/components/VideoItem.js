import React from 'react'

import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt='thumbnail'
        className='ui image'
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
