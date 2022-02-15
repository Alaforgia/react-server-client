import { useState, useEffect } from "react";
import axios from "axios";

import CreatureForm from "../CreatureForm/CreatureForm";

function App() {
  const [creatureList, setCreatureList] = useState([
    { name: "Unicorn", origin: "Britain" },
    { name: "Sphinx", origin: "Egypt" },
    { name: "Jackalope", origin: "America" },
  ]);

  const fetchCreatures = () => {
    // axios({
    //   method: "GET",
    //   url: "/creature",
    // })
    axios
      .get("/creature")
      .then((response) => {
        console.log("response is", response);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  // fetchCreatures();
  useEffect(() => {
    fetchCreatures();
  }, []);

  return (
    <div>
      <CreatureForm />
      <ul>
        {creatureList.map((creature) => (
          <li key={creature.name}>
            {creature.name} is from {creature.origin}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
