import React from "react";
import Vacancy from "./Vacancy";
import { connect } from 'react-redux';

const VacancyList = function(props){
    const {vacancies} = props;
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

const mapStateToProps = (state) =>{
    return {
        vacancies: state.vacancies
    }
}

export default connect(mapStateToProps)(VacancyList);
