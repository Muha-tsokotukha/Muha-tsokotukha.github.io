import React  from "react";
import {  filterVacs, tagRemoved } from "../redux/actions";
import { connect } from "react-redux";

const Tag = function(props){
    
    const {tag} = props;
    const {removeAndFilter} = props;

    return (
        <div className="TagList-container__item" key={tag.id}>
            <span className="TagList-container__name">
                {tag.name}
            </span>
            <span onClick={()=>removeAndFilter(tag.id)} className="TagList-container__remove">
                x
            </span>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    tag: ownProps.tag,
    tags: state.tags
})

const mapDispatchToProps = dispatch => ({
    removeTag: (id, tags) => {
        dispatch(tagRemoved(id));
        dispatch(filterVacs(tags));
    },
})

const mergeProps = (ownProps, mapProps) => {
    const { tag } = ownProps; 
    let { tags } = ownProps;
    const { removeTag } = mapProps;
    return {
        removeAndFilter: (id) => {
            tags = tags.filter(el => el.id !== id);
            removeTag(id, tags);
        },
        tag
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Tag)