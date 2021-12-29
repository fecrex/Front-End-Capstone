import React, { useRef } from 'react';
import QuestionsList from './QuestionsList.jsx';
import Modal from './AddQuestionModal.jsx';
import example from'./example_data.js';

// class QuestionsAnswers extends React.Component {
//   constructor(props) {
//     super(props);
//   }


//   const modal = useRef(null);

//   render() {
//     return (
//       <>
//       <h5>QUESTIONS & ANSWERS</h5>
//       <button onClick={() => modal.current.open()}></button>
//       <QuestionsList productQA={example.results}/>
//       <Modal ref={modal}>
//         Hello World
//       </Modal>
//       </>
//     )
//   }

// }

const QuestionsAnswers = function() {
  const modal = useRef(null);
  return (
          <>
          <h5>QUESTIONS & ANSWERS</h5>
          <button onClick={() => modal.current.open()}>Add Question</button>
          <QuestionsList productQA={example.results}/>
          <Modal ref={modal}>
            Hello World
          </Modal>
          </>
        )
}

export default QuestionsAnswers;