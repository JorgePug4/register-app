import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import "../../pages/Register/Register.css";

export default function InputSearchVisitor(props) {
  const textRef = useRef(null);
  const textOnchange = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <span className="iconW">
        <FiSearch />
      </span>
      <input
        ref={textRef}
        className="w-72"
        type="text"
        placeholder="Buscar Visitante..."
        value=""
        onChange={textOnchange}
      />
    </div>
  );
}
