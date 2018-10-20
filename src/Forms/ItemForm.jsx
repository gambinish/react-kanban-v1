import React, { Component } from 'react';

import { addItem } from '../actions/actions.js'

import { connect } from 'react-redux'

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      type: null,
      description: null,
      status: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    //preRedux:
    // e.preventDefault();
    // console.log('this.state submission:', this.state)
    // this.props.addItem(this.state)
    e.preventDefault();
    console.log('this.state submission:', this.state)
    this.props.dispatch(addItem(this.state))
  }

  handleChange(e) {
    e.preventDefault();
    const target = e.target
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, () => {
      console.log('state on submit: ', this.state)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Job Name:
          <input onChange={this.handleChange} name="name" type="text" />
        </label>
        <label>
          <select onChange={this.handleChange} name="type">
            <option value="">Select Job Type</option>
            <option value="wireframes">Wireframes</option>
            <option value="htmlBuild">HTML Build</option>
            <option value="integration">Integration</option>
          </select>
        </label>
        <label> Description:
          <input onChange={this.handleChange} name="description" type="text" />
        </label>
        <label>
          <select onChange={this.handleChange} name="status">
            <option value="">Status</option>
            <option value="assigned">Assigned</option>
            <option value="active">Active</option>
            <option value="inReview">In Review</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// export default connect(mapStateToProps)(ItemForm)

export default connect()(ItemForm)

// export default ItemForm