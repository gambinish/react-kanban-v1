import React from 'react';
// import { format } from 'path';

import Item from './Item.jsx';

const ActiveList = (props) => {

  let styles = {
    backgroundColor: '#627FEA'
  }

  return props.items.filter((item) => {
    return item.status === 'active'
  }).map(item => {
    return (<div className='listItem' key={item.id} style={styles}><Item name={item.name} status={item.status} /></div>)
  })
}

export default ActiveList;