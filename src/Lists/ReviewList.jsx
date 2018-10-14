import React from 'react';
// import { format } from 'path';

import Item from './Item.jsx';

const ReviewList = (props) => {

  let styles = {
    backgroundColor: 'orange'
  }

  return props.items.filter((item) => {
    return item.status === 'inReview'
  }).map(item => {
    return (<div className='listItem' key={item.id} style={styles}><Item name={item.name} status={item.status} /></div>)
  })
}

export default ReviewList;