import React from 'react';

import PropTypes from 'prop-types';

const Filter = ({ onClick, currentCategory }) => (
  <div className="custom-select-wrapper">
    <div className="custom-select">
      <div className="custom-select__trigger">
        <span>{currentCategory}</span>
        <div className="arrow" />
      </div>
      <div className="custom-options">
        <div className="custom-options">
          <option className="custom-option selected" onClick={onClick} value="1">Featured</option>
          <option className="custom-option" onClick={onClick} value="2">Broadcast</option>
          <option className="custom-option" onClick={onClick} value="3">Past Premiere</option>
        </div>
      </div>
    </div>
  </div>
);

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default Filter;
