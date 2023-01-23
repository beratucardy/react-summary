import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  /*  
  const handleClick = (val) => {
    if(val<0) val=0;
    setCounter(val);
  }

  onClick={()=> handleClick(counter+1)}
  onClick={()=> handleClick(counter-1)}
  onClick={()=> handleClick(0)}  
  */

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => setCounter((prev) => prev + 1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => setCounter((prev) => prev - 1)}>
        <AiOutlineMinusCircle />
      </Button>
      <Button variant="danger" onClick={() => setCounter(0)} disabled={counter===0}> {/* counter===0?true:false, !counter */}
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
