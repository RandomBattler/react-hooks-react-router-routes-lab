import React from "react";
import { actors } from "../data";

function Actors() {
  
  let id = 0;
  return <div>
  <h1>Actors Page</h1>
  {
    actors.map((a) => (
      <div key={id++}>
        <h2>{a.name}</h2>

        <ul>
        {a.movies.map((m) => (
          <li key={id++}>{m}</li>
        ))}
        </ul>
        
      </div>
    ))
  }
  </div>;
}

export default Actors;
