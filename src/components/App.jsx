import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setContact((prevValue) => {
      if (inputName == "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName == "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        };
      } else if (inputName == "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleContact}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleContact}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleContact}
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
