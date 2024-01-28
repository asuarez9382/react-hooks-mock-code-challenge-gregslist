import React from "react";

function Search({ searchValue, setSearchValue, listings, setListings }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Search Value:", searchValue);
  
    const formattedSearchValue = searchValue.trim().toLowerCase();
    console.log("Formatted Search Value:", formattedSearchValue);
  
    const newListings = listings.filter(listing => {
      console.log("Listing Description:", listing.description.toLowerCase());
      return listing.description.toLowerCase().includes(formattedSearchValue);
    });
  
    console.log("New Listings:", newListings);
  
    setListings(newListings);
  }
  
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
