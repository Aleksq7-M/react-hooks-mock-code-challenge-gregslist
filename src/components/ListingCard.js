import React, {useState} from "react";

function ListingCard({listing, onListingDelete}) {

  const {id, description, image, location} = listing
  const [favorited, setFavorited] = useState(false);

  function handleClick(){
    setFavorited(favorited => !favorited)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {method:'DELETE'})
    .then(r => r.json())
    .then(() => onListingDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button 
            className="emoji-button favorite active"
            onClick={handleClick}
          >★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleClick}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDeleteClick}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
