import React from 'react';

const Question = ({
  question,
  selectedOption,
  onOptionSelect,
  onNextQuestion,
  isLastQuestion,
}) => {
  const handleOptionChange = (e) => {
    onOptionSelect(parseInt(e.target.value));
  };

  const handleNextClick = () => {
    onNextQuestion();
  };

  return (
    <div>
      <h2>Question</h2>
      <p>{question.question}</p>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={index}
                checked={selectedOption === index}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextClick}>
        {isLastQuestion ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default Question;
