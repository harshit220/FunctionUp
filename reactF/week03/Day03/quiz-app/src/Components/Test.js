import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import Question from './Question';
import Result from './Result';

const questionsData = [
  {
    question: 'Question 1',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 2,
  },
  {
    question: 'Question 2',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 1,
  },
  // Add more questions here...
];

const Test = () => {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds

  // Function to handle selecting an option
  const handleOptionSelect = (optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  // Function to handle submitting the test
  const handleSubmit = () => {
    let finalScore = 0;
    selectedOptions.forEach((selectedOption, index) => {
      const correctAnswer = questionsData[index].correctAnswer;
      if (selectedOption === correctAnswer) {
        finalScore += 2;
      }
    });
    setScore(finalScore);
    history.push('/result');
  };

  // Function to handle starting the timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to handle ending the test when time is up
  useEffect(() => {
    if (timeRemaining === 0) {
      handleSubmit();
    }
  }, [timeRemaining]);

  // Function to handle going to the next question
  const handleNextQuestion = () => {
    if (currentQuestion === questionsData.length - 1) {
      handleSubmit();
    } else {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
  };

  return (
    <div>
      <h1>Test</h1>
      <p>Time remaining: {timeRemaining} seconds</p>
      <Switch>
        <Route exact path="/" render={() => (
          <Question
            question={questionsData[currentQuestion]}
            selectedOption={selectedOptions[currentQuestion]}
            onOptionSelect={handleOptionSelect}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestion === questionsData.length - 1}
          />
        )} />
        <Route path="/result" render={() => (
          <Result score={score} totalMarks={questionsData.length * 2} />
        )} />
      </Switch>
    </div>
  );
};

export default Test;
