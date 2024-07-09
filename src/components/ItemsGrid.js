import React, { useState } from "react";
import "../styles.css";
import Item from "./Item";

export default function ItemsGrid({ items, wishlist, toggleWishlist }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("All Category");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesCategory = (item, category) => {
    return (
      category === "All Category" ||
      item.category.toLowerCase() === category.toLowerCase()
    );
  };

  const matchesSearchTerm = (item, searchTerm) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (item, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return item.rating >= 8;

      case "Ok":
        return item.rating >= 5 && item.rating < 8;

      case "Bad":
        return item.rating < 5;

      default:
        return false;
    }
  };

  const filteredItems = items.filter(
    (item) =>
      matchesCategory(item, category) &&
      matchesRating(item, rating) &&
      matchesSearchTerm(item, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Category</label>
          <select
            className="filter-dropdown"
            value={category}
            onChange={handleCategoryChange}
          >
            <option>All Category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Children</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlist.includes(item.id)}
          ></Item>
        ))}
      </div>
    </div>
  );
}
