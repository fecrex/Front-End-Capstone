import React from 'react';
import Question from './Question-Answer.jsx';

const QuestionsList = function(props) {

  console.log('the props', props);
  return (
    <div className="questions-list" id="accordion">
      {props.productQA.map((question) =>
        <Question question_body={question.question_body} answers={question.answers} date={question.question_date} q_helpfulness={question.question_helpfulness} key={question.question_id} id={question.question_id}/>
      )}
      {/* <Question body={props.productQA.question_body} askerName={props.productQA.asker_name} question_helpfulness={props.productQA.question_helpfulness} answers={props.productQA.answers}/> */}
    </div>
  )
}

export default QuestionsList;