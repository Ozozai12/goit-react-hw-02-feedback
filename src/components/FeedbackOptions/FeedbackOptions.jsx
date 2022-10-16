import React from 'react';

const FeedbackOptions = ({ onBad, onNeutral, onGood }) => {
  return (
    <div>
      <button type="button" onClick={onBad}>
        Bad
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onGood}>
        Good
      </button>
    </div>
  );
};

export default FeedbackOptions;
