import React, { useState, useEffect } from 'react';
import './style.css';
import { StudentDetails } from './Component/StudentDetails/StudentDetails';

export default function App() {
  // useState->variable,changeVariableName
  // const [variable,methodName]=useState(initialValue)
  //class-this.setState({[name]:value})

  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState(0);

  const [staffDetails, setStaffDetails] = useState({
    firstName: 'Imadh',
    age: 0,
  });

  const [employee, setEmployee] = useState([]);

  let handleChange = (e) => {
    setFirstName(e.target.value);
  };

  // person.firstName
  // let name='firstName'
  // person[name]
  //number=[8,9,0]
  // mynumber=[...number]
  let handleDetailsChange = (e) => {
    let { name, value } = e.target;
    let details = {
      ...staffDetails, //already present value
      [name]: value,
    };
    console.log('details', details);
    setStaffDetails(details);
  };

  let handleAdd = () => {
    let data = {
      ...staffDetails,
    };
    let item = [...employee];
    item.push(data);
    setEmployee(item);
  };

  let getCount = (value) => {
    console.log('parent-count', value);
  };
  useEffect(() => {
    console.log('updating', employee);
  }, [employee]);
  console.log('rendering');
  return (
    <div>
      <h1>Function Component</h1>
      <p>Stateless Component (no state,nolifecycle -- use hooks )</p>
      <p>Hooks-useState {firstName}</p>
      <p>
        Hooks-useState Object {staffDetails.firstName} {staffDetails.age}
      </p>

      {/* <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <input type="text" name="age" value={age} onChange={handleChange} /> */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <input
          type="text"
          name="firstName"
          value={staffDetails.firstName}
          onChange={handleDetailsChange}
        />
        <input
          type="text"
          name="age"
          value={staffDetails.age}
          onChange={handleDetailsChange}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <StudentDetails staffDetails={staffDetails} sendCount={getCount} />
    </div>
  );
}
