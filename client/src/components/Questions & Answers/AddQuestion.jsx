import React, { useState } from 'react';

const AddQuestion = function(props) {
  // probably should make a post request upon submission of the question


  return (
    <form className="add-question-form" onSubmit={(event) => props.onSubmit(event, props.product)}>
      <div className="form-group title-bar">
        <h1 id="question-modal-title">Ask Your Question</h1>
        <h3 id="question-modal-product-name">{`About the ${props.product.name}`}</h3>
      </div>
      <div className="form-group">
        <label htmlFor="question_input">Your Question</label>
        <input className="form-control" id="question_input" placeholder="Type your question here." maxLength="1000"></input>
      </div>
      <div className="form-group">
        <label htmlFor="username">What is your nickname?</label>
        <input className="form-control" id="username_question" placeholder="Example: jackson11!" maxLength="60"></input>
      </div>
      <div className="form-group">
        <span id="question-modal-warning">For privary reasons, do not use your full name or email address</span>
      </div>
      <div className="form-group">
        <label htmlFor="email_question">Your email</label>
        <input className="form-control" id="email_question" placeholder="Why did you like this product or not?" maxLength="60"></input>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-submit btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddQuestion;