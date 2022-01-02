import React from 'react';

const Search = function(props) {
  return (
    <form>
      <input type="search" className="search-form-control" placeholder="Have a question? Search for answers..." onChange={(event) => props.handleChange(event)}></input>
    </form>
  )
}

export default Search;