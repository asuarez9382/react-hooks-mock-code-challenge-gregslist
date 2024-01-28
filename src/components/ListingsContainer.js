import React, { useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ listings, setListings }) {

  function handleDelete(e) {
    console.log(e.target.parentNode.parentNode.id)
    
    let cardId = parseInt(e.target.parentNode.parentNode.id)

    const newListings = listings.filter(listing=> cardId !== listing.id)

    cardId = cardId.toString()

    fetch(`http://localhost:6001/listings/${cardId}`, {
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => setListings(newListings))

  }

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard 
            id={listing.id}
            key={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
