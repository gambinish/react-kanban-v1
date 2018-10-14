import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Item from './Item.jsx';


const AssignedList = (props) => {

  let styles = {
    backgroundColor: '#33cc33'
  }

  return props.items.filter((item) => {
    return item.status === 'assigned'
  }).map(item => {
    return (
      <div className='listItem' key={item.id} style={styles}>
        <Router>
          <div>
            <Link className="App-title" to="/assigned">Show</Link>
            <Route path="/assigned" component={() => <AssignedList items={this.state.items} />} />
          </div>
        </Router>
        <Item name={item.name} status={item.status} />
        <button className='deleteBtn'>DELETE</button>
      </div>
    )
  })
}

export default AssignedList;