import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        listings={listings}
        setListings={setListings}
      />
      <ListingsContainer 
        listings={listings}
        setListings={setListings} 
      />
    </div>
  );
}

export default App;
