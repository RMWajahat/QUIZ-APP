import React, { useRef, useState, useEffect } from 'react';
import '../CSS/Quiz.css';
import { data } from '../data';

const Quiz = () => {
  const [indexedDB, setIndexedDB] = useState(0);
  const [question, setQuestion] = useState({});
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selected, setSelected] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const optionArray = [option1, option2, option3, option4];

  useEffect(() => {
    shuffleQuestions();
    setQuestion(data[indexedDB]);
  }, []);

  useEffect(() => {
    setQuestion(data[indexedDB]);
  }, [indexedDB]);

  const shuffleQuestions = () => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
  };

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        optionArray[question.ans - 1].current.classList.add('correct');
      }
      e.target.classList.add('selected');
    }
  };

  const next = () => {
    if (lock) {
      if (indexedDB === data.length - 1) {
        setResult(true);
        return;
      }
      setIndexedDB((prevIndexedDB) => prevIndexedDB + 1);
      setLock(false);
      setSelected(false);
      optionArray.forEach((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
      });
    }
  };

  const reset = () => {
    setIndexedDB(0);
    setScore(0);
    setResult(false);
    setSelected(false);
    shuffleQuestions();
  };

  return (
    <div>
      <div className="container">
        <h1>Quiz</h1>
        <hr />
        {result ? (
          <>
            <h2>
              You scored {score} out of {data.length}
            </h2>
            <div onClick={reset} className="btn">
              Reset
            </div>
          </>
        ) : (
          <>
            <div className="font">
              <h2>
                {indexedDB + 1}.{question.question}
              </h2>
              <br />
              <br />
              <ul>
                <li ref={option1} onClick={(e) => checkAns(e, 1)}>
                  {question.option1}
                </li>
                <li ref={option2} onClick={(e) => checkAns(e, 2)}>
                  {question.option2}
                </li>
                <li ref={option3} onClick={(e) => checkAns(e, 3)}>
                  {question.option3}
                </li>
                <li ref={option4} onClick={(e) => checkAns(e, 4)}>
                  {question.option4}
                </li>
              </ul>
            </div>
            <div onClick={next} className="btn">
              Next
            </div>
            <div className="index">
              {indexedDB + 1} of {data.length} question
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;

