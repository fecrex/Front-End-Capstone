import React from 'react';
import Question from './Question.jsx';

const QuestionsList = function(props) {
  return (
    <div className="questions-list" id="accordion">
      {props.productQA.map((question) =>
        <Question question_body={question.question_body} answers={question.answers} date={question.question_date} q_helpfulness={question.question_helpfulness} key={question.question_id} id={question.question_id}/>
      )}
    </div>
  )
}

export default QuestionsList;