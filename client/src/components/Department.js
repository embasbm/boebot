import React, { Component } from 'react';
import axios from 'axios';
import ItemsContainer from "./ItemsContainer";
import EpigraphsContainer from "./EpigraphsContainer";

class Department extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    return (
      <ItemsContainer items={this.state.items} />,
      <EpigraphsContainer
        diary={this.props.diary}
        section={this.props.section}
        department={this.props.department}
        epigraphs={this.state.epigraphs}
      />
    )
  }
}

export default Department;
