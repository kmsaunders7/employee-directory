import React from "react";



function Search() {

  return (
    <form className="search">
      <div className="form-group">
        <input
        //   value={searchName}
        //   onChange={onSearch}
          type="text"
          className="form-control"
          placeholder="Search Employee By Name"
        />
      </div>
    </form>
  );
}

export default Search;