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

  const [productId, setProductId] = useState('');
  const [questions, setQuestions] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getQuestions();
    // getQuestions((results) => {
    //   setProductId(props.product.id);
    //   setQuestions(results.data);
    // })
  }, [questions])

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


  const getQuestions = async() => {
    try {
      var questions = await axios.get('http://localhost:3000/qa/questions');
      setQuestions(questions.data.results);
      setLoading(true);
    } catch(err) {
      console.error('Error retrieving questions', err);
    }
  }


  return (
          <>
          <h5>QUESTIONS & ANSWERS</h5>
          <button onClick={() => modal.current.open()}>Add Question</button>
          {loading ? <QuestionsList productQA={example.results} questions={questions}/> : null }
          <Modal ref={modal}>
            Hello World
          </Modal>
          </>
        )
}

export default QuestionsAnswers;