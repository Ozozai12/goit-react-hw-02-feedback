import React from 'react';

export const FeedbackOptions = ({ options, onOptionClick }) => {
  return options.map(option => {
    return (
      <button type="button" onClick={() => onOptionClick(option)} key={option}>
        {option}
      </button>
    );
  });
};
