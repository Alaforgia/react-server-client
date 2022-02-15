import axios from "axios";
import { useState } from "react";

function CreatureForm() {
  const [newCreatureName, setNewCreatureName] = useState("");
  const [newCreatureOrigin, setNewCreatureOrigin] = useState("");
  const addCreature = (event) => {
    event.preventDefault();
    console.log("Submitted");
    //     axios.post("/creature")
    //     .then((response)=>{

    // })
  };

  return (
    <>
      <h2>Add Creature</h2>
      <form onSubmit={addCreature}>
        <label htmlFor="name">Name: </label>
        <input id="name" onChange={(event) => setNewCreatureName(event.target.value)} />
        <label htmlFor="origin">Origin: </label>
        <input id="origin" onChange={(event) => setNewCreatureOrigin(event.target.value)} />
      </form>
    </>
  );
}

export default CreatureForm;
