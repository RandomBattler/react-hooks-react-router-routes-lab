import React from "react";
import { directors } from "../data";

function Directors() {
    let id = 0;
  return <div>
  <h1>Directors Page</h1>
  {
    directors.map((d) => (
      <div key={id++}>
        <h2>{d.name}</h2>

        <ul >
        {d.movies.map((m) => (
          <li key={id++}>{m}</li>
        ))}
        </ul>
        
      </div>
    ))
  }
  </div>;
}

export default Directors;
