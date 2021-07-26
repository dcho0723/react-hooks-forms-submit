import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState ([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(firstName.length > 0 ){
    const formData = { firstName: firstName, lastName: lastName
    }
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray);
    setErrors([])
    setFirstName("")
    setLastName("");
  } else {
    setErrors(["First name is required!"])
  }
  }

  const listOfSubmissions = submittedData.map( (data, index) => {
    return (
      <div key={index}>
        <p>{data.firstName} {data.lastName}</p>
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? <p>{errors}</p> : null }
      <h3>{listOfSubmissions}</h3>
  </div>
  );
}

export default Form;
