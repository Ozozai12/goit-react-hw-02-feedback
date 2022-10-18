import React from 'react';

const Statistics = ({ bad, neutral, good, total, positive }) => {
  return (
    <div>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      {positive && (
        <p>
          Positive feedback: <span>{positive.toFixed(0)}%</span>
        </p>
      )}
    </div>
  );
};

export default Statistics;
