import React from 'react';
// import { format } from 'path';

import Item from './Item.jsx';


const AssignedList = (props) => {

  let styles = {
    backgroundColor: '#33cc33'
  }

  return props.items.filter((item) => {
    return item.status === 'assigned'
  }).map(item => {
    return (<div className='listItem' key={item.id} style={styles}><Item name={item.name} status={item.status} /></div>)
  })
}

export default AssignedList;