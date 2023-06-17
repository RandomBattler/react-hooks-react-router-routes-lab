import React from "react";
import { movies } from "../data";

function Movies() {
  let id = 0;
  return <div>
  <h1>Movies Page</h1>
  {
    movies.map((m) => (
      <div key={id++}>
        <h2>{m.title}</h2>
        <h4>Time: {m.time}</h4>

        <ul>
        {m.genres.map((g) => (
          <li key={id++}>{g}</li>
        ))}
        </ul>
        
      </div>
    ))
  }

  </div>;
}

export default Movies;
