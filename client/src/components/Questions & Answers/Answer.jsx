import React from 'react';

const Answer = function(props) {
  return (
      <>
        <div className="answer">{`A: ${props.answer.body}`}</div>
        <div className="from-user">{props.answer.answerer_name}, {props.answer.date}</div>
        <div className="helpful-answer">Helpful? Yes ({props.answer.helpfulness})</div>
        <div className="report-answer">Report</div>
      </>
  )
}

export default Answer;