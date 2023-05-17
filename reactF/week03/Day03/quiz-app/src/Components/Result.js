import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ score, totalMarks }) => {
  const passingMarks = 12;

  const isPassing = score >= passingMarks;

  return (
    <div>
      <h2>Result</h2>
      <p>Your score: {score}</p>
      <p>Total marks: {totalMarks}</p>
      {isPassing ? (
        <p>Congratulations! You have passed the test.</p>
      ) : (
        <div>
          <p>Unfortunately, you have failed the test.</p>
          <Link to="/">Restart Test</Link>
        </div>
      )}
    </div>
  );
};

export default Result;
