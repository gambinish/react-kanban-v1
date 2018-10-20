import { GET_ALL_ITEMS, ADD_ITEM, REMOVE_ITEM } from '../actions/actions.js'

const itemReducer = (state = [], action) => {

  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.payload
    case ADD_ITEM:
      return [...state, action.payload]
    case REMOVE_ITEM:
      let id = action.payload
      let arr = state.filter(e => {
        return e.id !== id;
      })
      return arr;
    default:
      return state

  }
}

export default itemReducer;