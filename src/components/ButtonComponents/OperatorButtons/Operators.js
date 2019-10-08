//import any components needed
//Import your array data from the provided data file
import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";


// STEP 2 - add the imported data to state

  {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

const Operators = () => {

  const [ops, setOps] = useState(operators);

  return (
    <div>
      {
      ops.map (operators => {
        return <OperatorButton key= {operators.char} operator = {operators.value}/>
      })}
    </div>
  );
};

export default Operators;