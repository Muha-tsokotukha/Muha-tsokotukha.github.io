import React  from "react";
import {  filterVacs, tagRemoved } from "../redux/actions";
import store from '../redux/store';

const Tag = function(props){
    
    const tag = props.tag;
    
    function removeTag(id){
        store.dispatch(tagRemoved(id));
        store.dispatch(filterVacs(store.getState().tags));
    }
    return (
        <div className="TagList-container__item" key={tag.id}>
            <span className="TagList-container__name">
                {tag.name}
            </span>
            <span onClick={()=>removeTag(tag.id)} className="TagList-container__remove">
                x
            </span>
        </div>
    )
};

export default Tag;
