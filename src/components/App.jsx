import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [submitName, setSubmitName] = useState("");

  const [mouseOver, setMouseOver] = useState(false);

  return (
  
    <div className="container">
      <h1>Hello{submitName}!</h1>

      {/* FORM - preventDefault usefull to keep value after submiting */}
      <form onSubmit={(e) => e.preventDefault()}> 
        <input 
          type="text" 
          placeholder="What's your name?" 
          value={name}
          onChange={(e) => setName(e.target.value)} //Taking input value
        />
        <button 
          type="submit"

          //Passing input value into h1
          onClick={() => setSubmitName(" " + name) + setName("")}

          //Changing color of background 
          style={{backgroundColor: mouseOver ? "black" : "white"}}
          onMouseOver={() => setMouseOver(true)} 
          onMouseOut={() => setMouseOver(false)} 
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;