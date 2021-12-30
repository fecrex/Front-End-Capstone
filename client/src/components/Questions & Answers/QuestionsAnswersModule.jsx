import React, { useRef, useState, useEffect } from 'react';
import QuestionsList from './QuestionsList.jsx';
import Modal from './AddQuestionModal.jsx';
import example from'./example_data.js';
import key from '../../../../config.js';
import axios from 'axios';

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

const QuestionsAnswers = function(props) {
  const modal = useRef(null);
  console.log(props.product)

  const [productId, setProductId] = useState('');
  const [questions, setQuestions] = useState('');
  const [answers, setAnswers] = useState('');
  useEffect(() => {
    getQuestions((results) => {
      setProductId(props.product.id);
      setQuestions(results.data);
    })
  })

  // const getQuestions = function(callback) {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${productId}`, {
  //     headers: {
  //       'Authorization': key.TOKEN,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((results) => {
  //     console.log(results);
  //     callback(results);
  //     // setQuestions()
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  // }


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