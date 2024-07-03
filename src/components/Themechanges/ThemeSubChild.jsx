// src/components/Themechanges/ThemeChild.jsx
import React from "react";
import ThemeSubChild from "./ThemeChild";

const ThemeChild = () => {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <ThemeSubChild />
    </div>
  );
};

export default ThemeChild;
