import React, { useState } from 'react';

function StudentDetails(props) {
  const [counter, setCounter] = useState(0);
  let handleCounter = () => {
    let count = counter;
    count = count + 1; // count++;
    console.log(count);
    // counter = count; // state immutable(can't change directly)
    props.sendCount(count);
    setCounter(count); // useState()-fun, setState-class
  };
  return (
    <div>
      StudentDetails{props.staffDetails.firstName}
      <button onClick={() => handleCounter()}>Click {counter}</button>
    </div>
  );
}
export { StudentDetails };
