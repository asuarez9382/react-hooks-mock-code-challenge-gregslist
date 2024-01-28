import React, { useState } from "react";

function ListingCard({ description, location, image, onDelete, id }) {
  
  const [isClicked, setIsClicked] = useState(false)

  function handleLike() {
    setIsClicked(!isClicked)
  }
  
  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button  onClick = {handleLike} className="emoji-button favorite active">{isClicked ? "★" : "☆"}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
