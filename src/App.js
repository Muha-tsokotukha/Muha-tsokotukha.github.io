import React, { useState } from "react";
import VacancyList from "./components/VacancyList";
import TagsList from "./components/TagsList";
import "./styles/all.css";
import store from "./redux/store";

function App() {
  let [vacancies, setVacancies] = useState(store.getState().vacancies);
  let [tags, setTags] = useState(store.getState().tags);
    store.subscribe(()=>{
      setVacancies( ()=>[...store.getState().vacancies] );
      setTags( ()=>[...store.getState().tags] );
      }
    );
    
  return (
    <div className="App">
      {/* <div className="img-header"></div> */}
      <img src="images/bg-header-desktop.svg" alt="header" className="img-header"/>
      <main className="App-lists">
        <TagsList tags={tags} />
        <VacancyList vacancies={vacancies} />
      </main>
    </div>
  );
}

export default App;
