import React  from "react";
import { clearTags } from "../redux/actions";
import Tag from "./Tag";
import { connect } from "react-redux";

const TagsList = function(props){
    const {tags} = props;
    const {filterClear} = props;

    return (
        <div>
            {tags.length > 0 &&
                <main className="TagList" >
                    <article  className="TagList-container" >
                    {tags.map(tag=>
                        <Tag tag={tag} key={tag.id} />
                    )} 
                    </article>
                <span onClick={()=>filterClear()} className="TagList-clear">Clear</span>
            </main>
            }
        </div>
    )
};

const mapStateToProps = (state) =>{
    return {
        tags: state.tags
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        filterClear: ()=>dispatch(clearTags())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TagsList);
