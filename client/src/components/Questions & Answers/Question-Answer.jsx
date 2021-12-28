import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = function(props) {

  const [count, setCount] = useState(2);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="individual-question">
      <input type="radio" id={props.id} className="accordion"/>
      <label className="question-label" htmlFor={props.id}>Q: {props.question_body} </label>
      {/* <span className="question">Q: {props.body}</span> */}
      <div className="helpful-question">Helpful? Yes ({props.question_helpfulness})</div>
      <div className="add-answer">| Add Answer</div>
      {/* <Answer answers={props.answers} answerIds={Object.keys(props.answers)}/> */}
      {count === 2 ? Object.keys(props.answers).slice(0,count).map((key, i) =>
        <Answer answer={props.answers[key]} key={i}/>
      ) : Object.keys(props.answers).slice(0, 4).map((key, i) => <Answer answer={props.answers[key]} key={i}/>)}
    </div>
  )
}

export default Question;
