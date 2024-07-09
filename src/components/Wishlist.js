import React from "react";
import "../styles.css";
import Item from "./Item";

export default function Wishlist({ items, wishlist, toggleWishlist }) {
  return (
    <div>
      <h1 className="title">Your Wishlist</h1>
      <div className="wishlist">
        {wishlist.map((id) => {
          const item = items.find((item) => item.id === id);
          return (
            <Item
              key={id}
              item={item}
              toggleWishlist={toggleWishlist}
              isWishlisted={true}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}
