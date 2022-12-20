import React from "react";

const Main = ({ name, displayName, setDisplayName }) => {
  return (
    <div>
      <button
        onClick={() => {
          setDisplayName(!displayName);
        }}
      >
        Click me
      </button>
      <div>{displayName ? <h1>{name}</h1> : ""}</div>
    </div>
  );
};

export default Main;
