import React from "react";

const Banner3 = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <span>Home</span>
        <span>.Pages</span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Banner3;
