import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Item from './Item.jsx';

const ActiveList = (props) => {

  let styles = {
    backgroundColor: '#627FEA'
  }

  return props.items.filter((item) => {
    return item.status === 'active'
  }).map(item => {
    return (
      <div className='listItem' key={item.id} style={styles}>
        <Router>
          <div>
            <Link className="App-title" to="/active">Show</Link>
            <Route path="/active" component={() => <ActiveList items={this.state.items} />} />
          </div>
        </Router>
        <Item name={item.name} status={item.status} />
        <button className='deleteBtn'>DELETE</button>
      </div>
    )
  })
}

export default ActiveList;