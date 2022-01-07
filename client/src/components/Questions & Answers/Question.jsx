import React, { useState } from 'react';
import Answer from './Answer.jsx';
import _ from 'underscore';
const Question = function(props) {

  // no real use for this, was using it to manipulate how many questions showed
  const [showButton, setShowButton] = useState(false);
  const [helpfulness, setQuestionHelpfulness] = useState(props.q_helpfulness);


  return (

    <div className="individual-question">
      <input type="radio" id={props.id} className="accordion" name="accordion_input" onClick={() => setShowButton(true)}/>
      <label className="question-label" htmlFor={props.id}>Q: {props.question_body} <div  className="helpful-question">Helpful? {<button onClick={() => {
        if (!props.markedQuestions.includes(props.id)) {
          props.handleHelpfulnessClick(props.id, props.q_helpfulness)
          setQuestionHelpfulness(helpfulness + 1);
        }
        }}>Yes</button>}({helpfulness})</div>
      <div className="add-answer" onClick={() => {
        props.addAnswer(props.question_body, props.id)
        props.openModal();
      }
      }>| Add Answer</div> </label>
      <div className="answer-content">
        {showButton ? <button id="show-answers" onClick={() => props.show(props.message)}>{props.message}</button> : null}
        {showButton && (props.message === 'Show Less' || props.message === 'Show All Answers') ? <button id="show-all-answers" onClick={() => props.showAllAnswers(props.showAllMsg, Object.keys(props.answers).length)}>{props.showAllMsg}</button> : null}
        {props.count === 2 ? Object.keys(props.answers).slice(0, props.count).map((key, i) => <Answer answerHelpfulnessClicked={props.answerHelpfulnessClicked} markedAnswers={props.markedAnswers} openModal={props.openModal} answer={props.answers[key]} key={i}/>
        ) : Object.keys(props.answers).slice(0, props.count).map((key, i) => <Answer answerHelpfulnessClicked={props.answerHelpfulnessClicked} markedAnswers={props.markedAnswers} openModal={props.openModal} answer={props.answers[key]} key={i}/>)}
      </div>
    </div>
  )
}

export default Question;
