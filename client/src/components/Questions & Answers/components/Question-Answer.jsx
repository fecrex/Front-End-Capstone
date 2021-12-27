import React from 'react';
import '../QAstyles.css';

const Question = function() {

  return (
    <div className="indiviudal-question">
      <span className="question">Q: this is an example question?</span>
      <span className="answer">A: this is an example answer.</span>
      <span className="from-user">User123, current_date</span>
      <span className="helpful">Helpful? Yes (number of upvotes)</span>
      <span className="report-button">Report</span>
    </div>
  )
}

export default Question;