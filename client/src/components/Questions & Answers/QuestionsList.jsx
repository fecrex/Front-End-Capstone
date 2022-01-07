import React, { useState } from 'react';
import Question from './Question.jsx';
import _ from 'underscore'

const QuestionsList = function(props) {
  const [showButton, setShowButton] = useState(false);
  if (props.questions.length !== 0) {
    return (
      <>
      <div className="questions-list" id="accordion">
        {props.questions.slice(0, props.question_count).map((question) => {
          question.answers = _.sortBy(question.answers, function(answer) {
            return answer.helpfulness;
          }).reverse();
          return <Question showButton={showButton} setShowButton={setShowButton}markedAnswers={props.markedAnswers} answerHelpfulnessClicked={props.answerHelpfulnessClicked} markedQuestions={props.markedQuestions} showAllMsg={props.showAllMsg} showAllAnswers={props.showAllAnswers} show={props.show} handleHelpfulnessClick={props.handleHelpfulnessClick} setCount={props.setCount} setMessage={props.setMessage} count={props.count} message={props.message} addAnswer={props.addAnswer} openModal={props.openAnswerModal} question_body={question.question_body} answers={question.answers} date={question.question_date} q_helpfulness={question.question_helpfulness} key={question.question_id} id={question.question_id}/>
        }
        )}
      </div>
      {showButton ? <button id="show-answers" onClick={() => props.show(props.message)}>{props.message}</button> : null}
        {/* {showButton && (props.message === 'Show Less' || props.message === 'Show All Answers') ? <button id="show-all-answers" onClick={() => props.showAllAnswers(props.showAllMsg, Object.keys(props.answers).length)}>{props.showAllMsg}</button> : null} */}
      </>

    )
  } else {
    return (
      <div className="add-question-container">
        <div className="add-question-message">This product does not have any questions. Would you like to add one?</div>
      </div>
      // <button className="add-question-button">Add A Question</button>
    )
  }

}

export default QuestionsList;