import * as actions from './actionTypes';

export function tagAdded(tag){
    return {
        type: actions.TAG_ADDED,
        payload: {
          name: tag
        }
    }
}
export function tagRemoved(id){
    return {
        type: actions.TAG_REMOVED,
        payload: {
          id
        }
    }
}
export function filterVacs(tags){
  return {
      type: actions.FILTER,
      payload: {
        tags
      }
  }
}
export function clearFilter(){
  return {
      type: actions.FILTER_CLEAR,
  }
}
export function clearTags(){
  return {
      type: actions.TAGS_CLEAR,
  }
}