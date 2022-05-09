import React from "react";
import Vacancy from "./Vacancy";
const VacancyList = function(props){
    const vacancies = props.vacancies;
    return (
        <main >
            <article className="VacancyList">
                {vacancies.map(vacancy=>
                    <Vacancy vacancy={vacancy} key={vacancy.id} />
                )} 
            </article>
        </main>
    )
};

export default VacancyList;
