import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ video }) => (
  <div className="videoEntry">
    <img src={video.thumbnail} alt=" " />
    <div className="video">
      <div className="video-image">
        <img src={video.game.thumbnail} alt=" " />
      </div>
      <div className="video-title">
        <span className="title"><p>{video.title}</p></span>
        <span className="game"><p>{video.game.name}</p></span>
      </div>
    </div>
  </div>
);

Video.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    game: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Video;
