import React  from "react";
import { clearFilter, clearTags } from "../redux/actions";
import store from '../redux/store';
import Tag from "./Tag";
const TagsList = function(props){
    
    const tags = props.tags;
    
    function filterClear(){
        store.dispatch(clearTags());
        store.dispatch(clearFilter());
    }
    return (
        <div>
            {tags.length > 0 ? 
                <main className="TagList" >
                    <article  className="TagList-container" >
                    {tags.map(tag=>
                        <Tag tag={tag} key={tag.id} />
                    )} 
                    </article>
                <span onClick={()=>filterClear()} className="TagList-clear">Clear</span>
            </main>
            : ""}
        </div>
    )
};

export default TagsList;
