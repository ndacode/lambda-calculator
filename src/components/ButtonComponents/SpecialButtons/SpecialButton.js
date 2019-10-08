import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = "specials_button">
    {props.value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;