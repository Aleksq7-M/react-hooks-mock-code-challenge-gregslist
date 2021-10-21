import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);

  function getListingsFromDB(){
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListings(data))
  }

  useEffect(() => {
    getListingsFromDB()
  }, [])

  function handleListingDelete(deletedId){
    const updatedListings = listings.filter(listing => listing.id !== deletedId)
    setListings(updatedListings);
  }

  function handleSearchSubmit(searchValue){
    if (searchValue !== ''){
      const updatedListings = listings.filter(listing => listing.description.includes(searchValue))
      setListings(updatedListings)
    }else{
      getListingsFromDB()
    }
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={listings} onListingDelete={handleListingDelete} />
    </div>
  );
}

export default App;
