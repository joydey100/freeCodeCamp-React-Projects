import React, { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  // All States
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays Today</h3>

        {/* Showing Persons in List Component */}
        <List people={people} />

        {/* Buttons */}
        <div className="buttons">
          <button
            onClick={() => setPeople([])}
            disabled={people.length ? false : true}
          >
            clear all
          </button>
          <button
            onClick={() => setPeople(data)}
            disabled={people.length ? true : false}
          >
            Reload
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
