import React from 'react';

const AddAnswer = function(props) {
  // probably should make a post request upon submission of the question

  return (
    <form onSubmit={(event) => props.onSubmit(event, props.product, props.currQuestion)}>
      <div className="form-group title-bar">
        <h1>Submit your Answer</h1>
        <h3>{`${props.product.name} : ${props.currQuestion}`}</h3>
      </div>
      <div className="form-group">
        <label htmlFor="answer">Your Answer</label>
        <input className="form-control" id="answer" placeholder="Type your answer here." maxLength="1000"></input>
      </div>
      <div className="form-group">
        <label htmlFor="username">What is your nickname?</label>
        <input className="form-control" id="username" placeholder="Example: jack543!" maxLength="60"></input>
      </div>
      <div className="form-group">
        <span>For privary reasons, do not use your full name or email address</span>
      </div>
      <div className="form-group">
        <label htmlFor="email">Your email</label>
        <input className="form-control" id="email" placeholder="Example: jack@email.com"></input>
      </div>
      <div className="form-group">
        <span>For authentication reasons, you will not be emailed</span>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddAnswer;