import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="Shopers Choice" />
      <h2 className="app-subtitle">
        It's time for Shopping! Find your favorite shopping items here.
      </h2>
    </div>
  );
}
