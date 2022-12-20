import React from "react";

const Person = ({ name, age, designation }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{designation}</h3>
    </div>
  );
};

Person.defaultProps = {
  name: "Abhijeet",
  age: 25,
  designation: "DA-1",
};

export default Person;
