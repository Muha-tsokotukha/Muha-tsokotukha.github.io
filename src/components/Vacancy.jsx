import React from "react";
import {tagAdded,filterVacs} from '../redux/actions';
import { connect } from "react-redux";

const Vacancy = function(props){
  const {vacancy} = props;
  const {addAndFilter} = props;
  
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
              <span onClick={()=>addAndFilter(vacancy.role)} className="vacancy-description__tag" >{vacancy.role}</span>
              <span onClick={()=>addAndFilter(vacancy.level)} className="vacancy-description__tag" >{vacancy.level}</span>
              { vacancy.languages.map((language)=> 
                <span onClick={()=>addAndFilter(language)} className="vacancy-description__tag" key={language}>{language}</span>
              )}
              { vacancy.tools.map((tool)=> 
                <span onClick={()=>addAndFilter(tool)} className="vacancy-description__tag" key={tool}>{tool}</span>
              )}
            </div>
      </main>
    )
}


const mapStateToProps = (state, ownProps) => ({
  vacancy: ownProps.vacancy,
  tags: state.tags
})

const mapDispatchToProps = dispatch => ({
  addTag: (tag, tags) => {
    dispatch(tagAdded(tag));
    dispatch(filterVacs(tags));
  },
})

const mergeProps = (ownProps, mapProps) => {
  let { tags } = ownProps; 
  const { vacancy } = ownProps;
  const { addTag } = mapProps;
  return {
      addAndFilter: (tag) => {
        tags = [...tags, {name: tag}]
        addTag(tag, tags);
      },
      vacancy
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Vacancy)
