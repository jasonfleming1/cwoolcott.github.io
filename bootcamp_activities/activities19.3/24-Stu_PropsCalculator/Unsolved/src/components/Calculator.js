import React from "react";
import Math from "./Math";

// Calculator renders the Math component 4 times with different props
function Calculator() {
  return (
    <div>
      {/* Math renders a span tag containing the result */}
      {/* Each span is the font-size of the result in pixels */}
      <p>
        19 + 142 = <Math num1={19} operator="+" num2={142} />
      </p>
      <p>42 - 17 = ?</p>
      <p>100 * 3 = ?</p>
      <p>96 / 4 = ?</p>
    </div>
  );
}

export default Calculator;
