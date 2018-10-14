import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Item from './Item.jsx';

const ReviewList = (props) => {

  let styles = {
    backgroundColor: 'orange'
  }

  return props.items.filter((item) => {
    return item.status === 'inReview'
  }).map(item => {
    return (
      <div className='listItem' key={item.id} style={styles}>
        <Router>
          <div>
            <Link className="App-title" to="/review">Show</Link>
            <Route path="/review" component={() => <ReviewList items={this.state.items} />} />
          </div>
        </Router>
        <Item name={item.name} status={item.status} />
        <button className='deleteBtn'>DELETE</button>
      </div>
    )
  })
}

export default ReviewList;