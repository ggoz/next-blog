import { useState } from "react";

const DarkTheme = () => {
  return (
    <>
      <style jsx global>{`
         {
          /* dark model */
        }
        :root {
          --background-color: black;
          --color: white;
        }
      `}</style>
    </>
  );
};

export default DarkTheme;
