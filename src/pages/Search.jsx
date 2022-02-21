import React from "react";
import { useSelector } from "react-redux";
export default function Search() {
  const image = useSelector((state) => state.visitor.image);
  return (
    <div>
      <h1>Search</h1>
      <img src={image} alt="jsj" />
    </div>
  );
}
