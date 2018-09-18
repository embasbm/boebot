import React, { Component } from 'react';
import Department from "./Department";

class DepartmentsContainer extends Component {
  render() {
    return (
      <div className="departments">
        {this.props.departments.map((department, index) => {
          return (<Department diary={this.props.diary} section={this.props.section} department={department} key={index} />)
        })}
      </div>
    )
  }
}

export default DepartmentsContainer;
