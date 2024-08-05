import { useState, useEffect } from "react";
import DarkTheme from "./DarkTheme";

const loadDarkTheme = () => {
  if (typeof localStorage === "undefined") {
    return false;
  }

  const darkModel = localStorage.getItem("darkTheme");
  return darkModel === null ? false : darkModel;
};

const ThemeSwitch = () => {
  const [isDarkModel, setIsDarkModel] = useState(loadDarkTheme());
  const text = isDarkModel ? "Dark Model" : "Light Model";
  const clickHandler = () => {
    localStorage.setItem("darkTheme", JSON.stringify(!isDarkModel));
    setIsDarkModel((state) => !state);
  };
  return (
    <>
      <button onClick={clickHandler} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          color: inherit;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
      {isDarkModel && <DarkTheme></DarkTheme>}
    </>
  );
};

export default ThemeSwitch;
