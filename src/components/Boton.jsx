import React from "react";
const Boton = ({label, onClick}) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};
 
export default Boton;