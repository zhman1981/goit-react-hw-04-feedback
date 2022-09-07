import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

function FeedbackOptions({ onBtnClick }) {
  return (
    <Buttons>
      <button onClick={onBtnClick}>Good</button>
      <button onClick={onBtnClick}>Neutral</button>
      <button onClick={onBtnClick}>Bad</button>
    </Buttons>
  );
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
