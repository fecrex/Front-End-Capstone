import React, { useState } from 'react';

const AddQuestion = function(props) {
  // probably should make a post request upon submission of the question


  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input className="form-control" id="username"></input>
      </div>
      <div className="form-group">
        <label htmlFor="question">Question</label>
        <input className="form-control" id="question" placeholder="Type your question here."></input>
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