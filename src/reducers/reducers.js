import { GET_ALL_ITEMS, ADD_ITEM, REMOVE_ITEM } from '../actions/actions.js'

const itemReducer = (state = [], action) => {

  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.payload
    case ADD_ITEM:
      return [...state, action.payload]
    case REMOVE_ITEM:
      // set current state to local variable 'newState'
      const newState = [...state]
      // logic
      const indexToDelete = state.findIndex(item => {
        return item.id === action.payload.id
      })
      // splice from local variable 'newState' and return
      newState.splice(indexToDelete, 1);
      return newState;
    default:
      return state

  }
}

export default itemReducer;