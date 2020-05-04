import React from 'react'

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>
  }

  const youtubeVideoSrc = "https://youtube.com/embed/"
  return (
    <div>
      <div className="ui embed">
        <iframe src={`${youtubeVideoSrc}${selectedVideo.id.videoId}`} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetails
