// src/components/Themechanges/ThemeSubChild.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ThemeToggleButton from "./ThemeToggleButton";

const ThemeSubChild = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>Current Theme: {theme}</h4>
      <ThemeToggleButton />
    </div>
  );
};

export default ThemeSubChild;
