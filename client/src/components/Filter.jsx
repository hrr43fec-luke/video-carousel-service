/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import PropTypes from 'prop-types';

const Filter = ({
  onClickOption, currentCategory, isVisible, onClickMenu,
}) => {
  const selectClassName = isVisible ? ' custom-select open' : 'custom-select';
  return (
    <div className="custom-select-wrapper" onClick={onClickMenu}>
      <div className={selectClassName}>
        <div className="custom-select__trigger">
          <span>{currentCategory}</span>
          <div className="arrow" />
        </div>
        <div className="custom-options">
          <option className="custom-option selected" onClick={onClickOption} value="1">Featured</option>
          <option className="custom-option" onClick={onClickOption} value="2">Past Broadcast</option>
          <option className="custom-option" onClick={onClickOption} value="3">Past Premiere</option>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onClickOption: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

export default Filter;
