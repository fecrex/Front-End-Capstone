import React, { useRef, useState, useEffect } from 'react';
import QuestionsList from './QuestionsList.jsx';
import AddQuestion from './AddQuestion.jsx';
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
  const question_modal = useRef(null);

  const [productId, setProductId] = useState('');
  const [questions, setQuestions] = useState('');
  const [loading, setLoading] = useState(false);
  const [questionInput, setQuestionInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');

  // const handleQuestionChange = function(event) {
  //   setQuestionInput(event.target.value);
  // }

  // const handleUserChange = function(event) {
  //   setUsernameInput(event.target.value);
  // }

  const onSubmit = (event) => {
    console.log(event)
    event.preventDefault(event);
    console.log(event.target.username.value);
    console.log(event.target.question.value);
  }


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
    let isMounted = true;
    try {
      var questions = await axios.get('http://localhost:3000/qa/questions');
      if (isMounted) {
        setQuestions(questions.data.results);
        setLoading(true);
      }
    } catch(err) {
      console.error('Error retrieving questions', err);
    }
  }


  return (
          <>
          <h5>QUESTIONS & ANSWERS</h5>
          <button onClick={() => question_modal.current.open()}>Add Question</button>
          {loading ? <QuestionsList productQA={example.results} questions={questions}/> : null }
          <Modal ref={question_modal}>
            <AddQuestion onSubmit={onSubmit}/>
          </Modal>
          </>
        )
}

export default QuestionsAnswers;