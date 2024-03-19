import { useState } from "react";
import data from "./data";

import "./App.css";
import PersonList from "./components/PersonList";
import { People } from "./definitions/people";

function App() {
  const [people, setPeople] = useState<People[]>(data);

  const clearList = () => setPeople([]);
  return (
    <main className="main">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <PersonList people={people} />
        <button type="button" className="btn btn-block" onClick={clearList}>
          Clear list
        </button>
      </section>
    </main>
  );
}

export default App;
