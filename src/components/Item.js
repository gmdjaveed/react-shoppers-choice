import React from "react";
import "../styles.css";

export default function Item({ item, isWishlisted, toggleWishlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";

    if (rating >= 5 && rating < 8) return "rating-ok";

    return "rating-bad";
  };

  return (
    <div key={item.id} className="item">
      <img
        src={`images/${item.image}`}
        alt={item.title}
        onError={handleError}
      />
      <div className="item-info">
        <h3 className="item-title">{item.title}</h3>
        <div>
          <span className="item-category">{item.category}</span>
          <span className={`item-rating ${getRatingClass(item.rating)}`}>
            {item.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWishlisted}
            onChange={() => toggleWishlist(item.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
