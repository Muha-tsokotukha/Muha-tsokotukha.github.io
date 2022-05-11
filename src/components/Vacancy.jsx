import React from "react";
import store from '../redux/store';
import {tagAdded,filterVacs} from '../redux/actions';

const Vacancy = function(props){
  const {vacancy} = props;
  
  function addTag(tag){
    store.dispatch(tagAdded(tag));
    store.dispatch(filterVacs(store.getState().tags));
  }
  

    return (
        <main className={`vacancy ${vacancy.featured && "featured"}`}>
            <article className="vacancy-info">
              <img className="vacancy-info__logo" src={vacancy.logo} alt="logo" />
              <section className="vacancy-description">
                <div className="vacancy-description__info">
                  <span className="vacancy-description__company">{vacancy.company}</span>
                  { vacancy.new && 
                    <span className="vacancy-description__new">NEW!</span>
                  }
                  { vacancy.featured &&
                    <span className="vacancy-description__featured">FEATURED</span>
                  }
                  
                </div>
                <div className="vacancy-description__position">
                    {vacancy.position}
                </div>
                <div className="vacancy-description__format">
                  <span className="vacancy-description__posted">{vacancy.postedAt}</span>
                  <span className="vacancy-description__employement">{vacancy.contract}</span>
                  <span className="vacancy-description__place">{vacancy.location}</span>
                </div>
              </section>
            </article>
            <div className="vacancy-description__tags">
              <span onClick={()=>addTag(vacancy.role)} className="vacancy-description__tag" >{vacancy.role}</span>
              <span onClick={()=>addTag(vacancy.level)} className="vacancy-description__tag" >{vacancy.level}</span>
              { vacancy.languages.map((language)=> 
                <span onClick={()=>addTag(language)} className="vacancy-description__tag" key={language}>{language}</span>
              )}
              { vacancy.tools.map((tool)=> 
                <span onClick={()=>addTag(tool)} className="vacancy-description__tag" key={tool}>{tool}</span>
              )}
            </div>
      </main>
    )
}
export default Vacancy;