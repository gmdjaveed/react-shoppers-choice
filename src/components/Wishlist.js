import React from "react";
import "../styles.css";
import ItemCard from "./ItemCard";

export default function Wishlist({ items, wishlist, toggleWishlist }) {
  return (
    <div>
      <h1 className="title">Your Wishlist</h1>
      <div className="wishlist">
        {wishlist.map((id) => {
          const item = items.find((item) => item.id === id);
          return (
            <ItemCard
              key={id}
              item={item}
              toggleWishlist={toggleWishlist}
              isWishlisted={true}
            ></ItemCard>
          );
        })}
      </div>
    </div>
  );
}
