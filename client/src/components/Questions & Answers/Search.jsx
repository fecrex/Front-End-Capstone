import React from 'react';

const Search = function(props) {
  return (
    <form className="search-field">
      <input type="search" id="search-form-control" placeholder="&nbsp;" onChange={(event) => props.handleChange(event)}></input>
      <label htmlFor="search-form-control" class="placeholder">Have a question? Search for answers...</label>
    </form>
  )
}

export default Search;