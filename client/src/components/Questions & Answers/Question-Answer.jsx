import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = function(props) {

  const [count, setCount] = useState(1);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="individual-question">
      <input type="radio" id="test" className="accordion"/>
      <label className="question-label" htmlFor="test">Q: {props.body}</label>
      {/* <span className="question">Q: {props.body}</span> */}
      <span className="helpful-question">Helpful? Yes ({props.question_helpfulness})</span>
      <span className="add-answer">| Add Answer</span>
      {/* <Answer answers={props.answers} answerIds={Object.keys(props.answers)}/> */}
      {count === 1 ? Object.keys(props.answers).slice(0,count).map((key, i) =>
        <Answer answer={props.answers[key]} key={i}/>
      ) : Object.keys(props.answers).slice(0, 4).map((key, i) => <Answer answer={props.answers[key]} key={i}/>)}
    </div>
  )
}

export default Question;
