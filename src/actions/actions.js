const initialState = [{
  id: 200,
  name: 'redux-1',
  type: 'redux-type-1',
  description: 'redux-description-1',
  status: 'assigned'
},
{
  id: 202,
  name: 'redux-1.5',
  type: 'redux-type-1.5',
  description: 'redux-description-1.5',
  status: 'assigned'
},
{
  id: 203,
  name: 'redux-2',
  type: 'redux-type-2',
  description: 'redux-description-2',
  status: 'active'
},
{
  id: 204,
  name: 'redux-2.5',
  type: 'redux-type-2.5',
  description: 'redux-description-2.5',
  status: 'active'
},
{
  id: 205,
  name: 'redux-3',
  type: 'redux-type-3',
  description: 'redux-description-3',
  status: 'inReview'
},
{
  id: 206,
  name: 'redux-3.5',
  type: 'redux-type-3.5',
  description: 'redux-description-3.5',
  status: 'inReview'
}]

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

export const getAllItems = () => {
  return {
    type: GET_ALL_ITEMS,
    payload: initialState
  }
}

export const addItem = (item) => {
  console.log('ACTION: addItem: ', item)
  return {
    type: ADD_ITEM,
    payload: item
  }
}