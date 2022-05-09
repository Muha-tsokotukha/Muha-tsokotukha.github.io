import { combineReducers } from 'redux';
import * as actions from './actionTypes';
import data from "../FakeDB.json";


let lastId = 0;
function tagsReducer(state=[], action){
    if( action.type === actions.TAG_ADDED ){
        let doesntInclude = true;
        if( state.length > 0 ){
            doesntInclude = !state.map(item => item.name).includes(action.payload.name);
        }
        if( doesntInclude )
        return [
            ...state,
            {
                id: lastId++,
                name: action.payload.name
            }
        ] ;
    }
    else if( action.type === actions.TAG_REMOVED ){
        return state.filter(tag=> tag.id !== action.payload.id);
    }
    else if( action.type === actions.TAGS_CLEAR ){
        return [];
    }
    return state;
}

function vacanciesReducer(state, action){
    if(action.type === actions.FILTER){
        const tags = action.payload.tags;
        let vacs = [];
        for( let x in data ){
            const vac = data[x];
            let has = true;
            for( let i in tags ){
                const tag = tags[i].name;
                if( !(  tag === vac["role"] || tag === vac["level"] || vac["tools"].includes(tag) || vac["languages"].includes(tag)  ) ){
                    has = false;
                }
            }
            if(has)vacs.push(vac); 
        }
        return vacs;
    }
    
    return data;
}

export const rootReducer = combineReducers({
    tags: tagsReducer,
    vacancies: vacanciesReducer
});