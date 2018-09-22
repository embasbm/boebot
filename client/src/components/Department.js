import React, { Component } from 'react';
import axios from 'axios';
import { Collapse } from 'react-collapse';

import ItemsContainer from "./ItemsContainer";
import EpigraphsContainer from "./EpigraphsContainer";

class Department extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      items: [],
      epigraphs: []
    }
  }

  componentDidMount() {
    axios.get('/api/v1/diaries/' + this.props.diary._id.$oid + '/sections/' + this.props.section._id.$oid + '/departments/' + this.props.department._id.$oid + '/items')
      .then(response => {
        this.setState({
          items: response.data.items,
          epigraphs: response.data.epigraphs
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { isOpened } = this.state;
    return (
      <div className="department">
        <h2 onClick={() => this.setState({ isOpened: !isOpened })}>{this.props.department.name}</h2>
        <Collapse isOpened={isOpened} hasNestedCollapse={true}>
          {this.state.items && <ItemsContainer items={this.state.items} department={this.props.department} /> }
          { this.state.epigraphs &&
            <EpigraphsContainer
              diary={this.props.diary}
              section={this.props.section}
              department={this.props.department}
              epigraphs={this.state.epigraphs}
            />
          }
        </Collapse>
      </div>
    )
  }
}

export default Department;
