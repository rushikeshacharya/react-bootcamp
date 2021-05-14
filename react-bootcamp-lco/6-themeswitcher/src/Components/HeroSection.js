import React, { useContext } from "react";
import ThemeContext from "../Context/TehemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1 rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme Toggler</h1>
      <p>This is a nice para</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          border: `${currentTheme.border}`,
        }}
        onClick={ThemeToggler.changeThemeMode({ mode: currentTheme })}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeroSection;
