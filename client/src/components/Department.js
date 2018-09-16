import React, { Component } from 'react';
import axios from 'axios';
import ItemsContainer from "./ItemsContainer";

class Department extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/api/v1/diaries/' + this.props.diary._id.$oid + '/sections/' + this.props.section._id.$oid + '/departments/' + this.props.department._id.$oid + '/items')
      .then(response => {
        this.setState({
          items: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="section-single-item">
        <div className="items-list">
          {this.state.items.map((item, index) => {
            return (
              <ItemsContainer item={item} />
            )
          })}
        </div>
      </div >
    )
  }
}

export default Department;
