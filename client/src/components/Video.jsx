import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ video }) => (
  <div>
    <img src={video.thumbnail} alt=" " />
    <span className="title"><h5>{video.title}</h5></span>
  </div>
);

Video.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Video;
