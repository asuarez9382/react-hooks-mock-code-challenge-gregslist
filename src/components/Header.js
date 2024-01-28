import React from "react";
import Search from "./Search";

function Header({ searchValue, setSearchValue, listings, setListings }) {



  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        listings={listings}
        setListings={setListings}
      />
    </header>
  );
}

export default Header;
