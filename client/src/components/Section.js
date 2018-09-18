import React, { Component } from 'react';
import axios from 'axios';
import { Collapse } from 'react-collapse';
import DepartmentsContainer from "./DepartmentsContainer";

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
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
    const { isOpened } = this.state;
    return (
      <div className="section">
        <h2 onClick={() => this.setState({ isOpened: !isOpened })}>{this.props.section.name} - {this.props.section.number}</h2>
        <Collapse isOpened={isOpened} hasNestedCollapse={true}>
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
        </Collapse>
      </div >
    )
  }
}

export default Section;
