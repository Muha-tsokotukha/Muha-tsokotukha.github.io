import React from "react";
import VacancyList from "./components/VacancyList";
import TagsList from "./components/TagsList";
import "./styles/all.css";

function App() {
  return (
    <div className="App">
      <img src="images/bg-header-desktop.svg" alt="header" className="img-header"/>
      <main className="App-lists">
        <TagsList/>
        <VacancyList/>
      </main>
    </div>
  );
}

export default App;