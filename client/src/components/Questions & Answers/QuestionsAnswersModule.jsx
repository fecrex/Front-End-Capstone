import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import example from'./example_data.js';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <h5>QUESTIONS & ANSWERS</h5>
      <QuestionsList productQA={example.results[0]}/>
      </>
    )
  }

}

export default QuestionsAnswers;