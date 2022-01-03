import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = function(props) {

  // no real use for this, was using it to manipulate how many questions showed
  const [count, setCount] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const [message, setMessage] = useState('Load more answers');



  const show = (message) => {
    if (message === 'Load more answers') {
      setCount(4);
      setMessage('Show Less');
    } else {
      setCount(2);
      setMessage('Load more answers');
    }
  }

  // const showLessAnswers = () => {
  //   setCount(2);
  //   setMessage('Load more answers');
  // }



  return (
    <div className="individual-question">
      <input type="radio" id={props.id} className="accordion" name="accordion_input"/>
      <label className="question-label" htmlFor={props.id}>Q: {props.question_body} <div className="helpful-question">Helpful? Yes ({props.q_helpfulness})</div>
      <div className="add-answer" onClick={() => {
        props.addAnswer(props.question_body)
        props.openModal()
      }
      }>| Add Answer</div> </label>
      <div className="answer-content">
        {count === 2 ? Object.keys(props.answers).slice(0,count).map((key, i) => <Answer openModal={props.openModal} answer={props.answers[key]} key={i} show={show} message={message}/>
        ) : Object.keys(props.answers).slice(0, count).map((key, i) => <Answer openModal={props.openModal} answer={props.answers[key]} key={i} show={show} message={message}/>)}
      </div>
    </div>
  )
}

export default Question;
