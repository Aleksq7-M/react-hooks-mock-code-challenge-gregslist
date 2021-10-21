import React, {useState} from "react";

function Search({onSearchSubmit}) {

  //search state lives here
  //listings ONLY UPDATE ON SUBMIT this way
  const [search, setSearch] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
