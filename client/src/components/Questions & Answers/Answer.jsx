import React, { useState } from 'react';

const Answer = function(props) {
  const [helpfulness, setAnswerHelpfulness] = useState(props.answer.helpfulness);
  return (
      <div className="individual-answer">
        <div className="answer">{`A: ${props.answer.body}`}</div>
        <div className="from-user">{`By: ${props.answer.answerer_name}`}, {new Date(props.answer.date).toString()}</div>
        <div className="helpful-answer">Helpful? {<button onClick={() => {
          if (!props.markedAnswers.includes(props.answer.id)) {
            props.answerHelpfulnessClicked(props.answer.id, props.answer.helpfulness)
            setAnswerHelpfulness(helpfulness + 1);
          }
        }}>Yes</button>} ({helpfulness})</div>
        <div className="report-answer">Report</div>
      </div>
  )
}

export default Answer;