import React from 'react';

const Answer = function(props) {
  return (
    <div className="answer-content">
       <span className="answer">{props.answer.body}</span>
       <span className="from-user">{props.answer.answerer_name}, {props.answer.date}</span>
       <span className="helpful-answer">Helpful? Yes ({props.answer.helpfulness})</span>
       <span className="report-answer">Report</span>
    </div>
  )
}

export default Answer;