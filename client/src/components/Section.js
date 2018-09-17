import React, { Component } from 'react';
import axios from 'axios';
import DepartmentsContainer from "./DepartmentsContainer";

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departments: []
    }
  }

  componentDidMount() {
    axios.get('api/v1/diaries/' + this.props.diary._id.$oid + '/sections/' + this.props.section._id.$oid + '/departments')
      .then(response => {
        this.setState({
          departments: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="section-single-item">
        <div className="departments-list">
          {this.state.departments.map((department, index) => {
            return (
              <DepartmentsContainer
                diary={this.props.diary}
                section={this.props.section}
                departments={this.state.departments}
                key={index}
              />
            )
          })}
        </div>
      </div >
    )
  }
}

export default Section;
