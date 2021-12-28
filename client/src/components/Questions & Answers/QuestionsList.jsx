import React from 'react';
import Question from './Question-Answer.jsx';

const QuestionsList = function(props) {


  return (
    <div className="questions-list">
      <Question body={props.productQA.question_body} askerName={props.productQA.asker_name} question_helpfulness={props.productQA.question_helpfulness} answers={props.productQA.answers}/>
    </div>
  )
}

export default QuestionsList;