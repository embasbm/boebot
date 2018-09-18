import React, { Component } from 'react';
import axios from 'axios';
import { Collapse } from 'react-collapse';
import ItemsContainer from "./ItemsContainer";

class Epigraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/api/v1/diaries/' + this.props.diary._id.$oid + '/sections/' + this.props.section._id.$oid + '/departments/' + this.props.department._id.$oid + '/items', { params: { epigraph_id: this.props.epigraph._id.$oid}})
      .then(response => {
        this.setState({
          items: response.data.items
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { isOpened } = this.state;
    return (
      <div className="epigraph">
        <h2 onClick={() => this.setState({ isOpened: !isOpened })}>{this.props.epigraph.name}</h2>
        <Collapse isOpened={isOpened} hasNestedCollapse={true}>
          <ItemsContainer items={this.state.items} />
        </Collapse>
      </div>
    )
  }
}

export default Epigraph;
