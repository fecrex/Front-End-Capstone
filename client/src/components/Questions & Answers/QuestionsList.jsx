import React from 'react';
import Question from './Question.jsx';

const QuestionsList = function(props) {
  if (props.questions.length !== 0) {
    return (
      <div className="questions-list" id="accordion">
        {props.questions.map((question) =>
          <Question openModal={props.openAnswerModal} question_body={question.question_body} answers={question.answers} date={question.question_date} q_helpfulness={question.question_helpfulness} key={question.question_id} id={question.question_id}/>
        )}
      </div>
    )
  } else {
    return (
      <div className="add-question-container">
        <div className="add-question-message">This product does not have any questions. Would you like to add one?</div>
        <button onClick={() => props.openModal()}>Add Question</button>
      </div>
      // <button className="add-question-button">Add A Question</button>
    )
  }

}

export default QuestionsList;