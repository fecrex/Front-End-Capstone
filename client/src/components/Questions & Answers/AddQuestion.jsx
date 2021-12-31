import React, { useState } from 'react';

const AddQuestion = function(props) {
  // probably should make a post request upon submission of the question


  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <div className="form-group title-bar">
        <h1>Ask Your Question</h1>
        <h3>About the [Product Name Here]</h3>
      </div>
      <div className="form-group">
        <label htmlFor="question">Your Question</label>
        <input className="form-control" id="question" placeholder="Type your question here." maxLength="1000"></input>
      </div>
      <div className="form-group">
        <label htmlFor="username">What is your nickname?</label>
        <input className="form-control" id="username" placeholder="Example: jackson11!" maxLength="60"></input>
      </div>
      <div className="form-group">
        <span>For privary reasons, do not use your full name or email address</span>
      </div>
      <div className="form-group">
        <label htmlFor="email">Your email</label>
        <input className="form-control" id="email" placeholder="Why did you like this product or not?" maxLength="60"></input>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddQuestion;