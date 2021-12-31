import React from 'react';

const AddAnswer = function(props) {
  // probably should make a post request upon submission of the question

  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input className="form-control" id="username"></input>
      </div>
      <div className="form-group">
        <label htmlFor="answer">Answer</label>
        <input className="form-control" id="answer" placeholder="Type your answer here."></input>
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