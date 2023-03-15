


import React, { useState } from "react";

export default function Check() {
  const [value, setValue] = useState(0);

  // Approach -1

  // let type;

  // if (value % 2 === 0) {
  //   type = "even";
  // } else {
  //   type = "Odd";
  // }
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form>
        <input type="num" name="number" value={value} onChange={handleChange} />
      </form>
      {/* <h2>{value % 2 === 0 ? "Even" : "Odd"}</h2> */}

      {/* Using AND Operator
       */}
      <h2>{value % 2 === 0 && "Even"}</h2>
      <h2>{value % 2 !== 0 && "odd"}</h2>

      {/* using OR Operator */}
      <h2> {value % 2 === 0 || "Odd"}</h2>
      <h2>{value % 2 !== 0 || "Even"}</h2>
    </div>
  );
}

// Approach -3

