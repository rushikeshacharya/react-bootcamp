import React, { useContext } from "react";
import ThemeContext from "../Context/TehemeContext";

const ThemeToggler = (props) => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const changeThemeMode = () => (
    setThemeMode(props.mode)
  )
  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
        <span>
            {themeMode === "light" ? "Turn Off" : "Lights On"}
        </span>
    </div>
  );
};

export default ThemeToggler ;
