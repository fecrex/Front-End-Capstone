import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = function(props) {

  // no real use for this, was using it to manipulate how many questions showed
  const [count, setCount] = useState(2);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="individual-question">
      <input type="radio" id={props.id} className="accordion" name="accordion_input"/>
      <label className="question-label" htmlFor={props.id}>Q: {props.question_body} <div className="helpful-question">Helpful? Yes ({props.q_helpfulness})</div>
      <div className="add-answer">| Add Answer</div> </label>
      <div className="answer-content">
        {count === 2 ? Object.keys(props.answers).slice(0,count).map((key, i) => <Answer answer={props.answers[key]} key={i}/>
        ) : Object.keys(props.answers).slice(0, 4).map((key, i) => <Answer answer={props.answers[key]} key={i}/>)}
      </div>
    </div>
  )
}

export default Question;
