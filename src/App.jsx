import React, { useState } from "react";

function App() {
  const [ok, setOk] = useState([]);
  const [pl, setPl] = useState("");

  function handleInputChange(event) {
    setPl(event.target.value);
  }

  function handleAdd() {
    if (pl) {
      setOk([...ok, pl]); 
      setPl(""); 
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a text"
        value={pl}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>

      <p>Set:</p>
      <ol>
        {ok.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
