import axios from 'axios';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const getAllItems = () => {

  return dispatch => {
    axios.get('http://localhost:8989/')
      .then(response => {
        dispatch({ type: GET_ALL_ITEMS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: 'DISPALY_ERROR_NOTIFICATION' })
      })
  }
}

export const addItem = (item) => {
  console.log('ACTION: addItem: ', item)
  return dispatch => {
    axios.post('http://localhost:8989/', item)
      .then(response => {
        console.log('ADD ITEM ACTION RESPONSE: ', response.data)
        dispatch({ type: GET_ALL_ITEMS, payload: response.data })
      })
      .catch(err => {
        console.log('ADD ITEM ACTION ERROR: ', err)
      })
  }

}

export const removeItem = (item) => {
  console.log('ACTION: removeItem: ', item)
  return dispatch => {
    axios.put('http://localhost:8989/delete', item)
      .then(item => {
        console.log('REMOVE ITEM ACTION RESPONSE: ', item)
        dispatch({ type: REMOVE_ITEM, payload: item.data })
      })
      .catch(err => {
        console.log('REMOVE ITEM ACTION ERROR: ', err)
      })
  }
}