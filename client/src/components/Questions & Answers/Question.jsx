import React, { useState } from 'react';
import Answer from './Answer.jsx';

const Question = function(props) {

  // no real use for this, was using it to manipulate how many questions showed
  const [showButton, setShowButton] = useState(false);
  // const [count, setCount] = useState(2);
  // const [message, setMessage] = useState('Load more answers');



  // const show = (message) => {
  //   if (message === 'Load more answers') {
  //     setCount(4);
  //     setMessage('Show Less');
  //   } else {
  //     setCount(2);
  //     setMessage('Load more answers');
  //   }
  // }

  // const showLessAnswers = () => {
  //   setCount(2);
  //   setMessage('Load more answers');
  // }



  return (
    <div className="individual-question">
      <input type="radio" id={props.id} className="accordion" name="accordion_input" onClick={() => setShowButton(true)}/>
      <label className="question-label" htmlFor={props.id}>Q: {props.question_body} <div onClick={() => props.handleHelpfulnessClick(props.id, props.q_helpfulness)} className="helpful-question">Helpful? Yes ({props.q_helpfulness})</div>
      <div className="add-answer" onClick={() => {
        props.addAnswer(props.question_body, props.id)
        props.openModal();
      }
      }>| Add Answer</div> </label>
      <div className="answer-content">
        {showButton ? <button id="show-answers" onClick={() => props.show(props.message)}>{props.message}</button> : null}
        {showButton && (props.message === 'Show Less' || props.message === 'Show All Answers') ? <button id="show-all-answers" onClick={() => props.showAllAnswers(props.showAllMsg, Object.keys(props.answers).length)}>{props.showAllMsg}</button> : null}
        {props.count === 2 ? Object.keys(props.answers).slice(0, props.count).map((key, i) => <Answer openModal={props.openModal} answer={props.answers[key]} key={i}/>
        ) : Object.keys(props.answers).slice(0, props.count).map((key, i) => <Answer openModal={props.openModal} answer={props.answers[key]} key={i}/>)}
      </div>
    </div>
  )
}

export default Question;
