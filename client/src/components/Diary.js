import React, { Component } from 'react';
import axios from 'axios';
import { Collapse } from 'react-collapse';

import SectionsContainer from "./SectionsContainer";
class Diary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      sections: []
    }
  }

  componentDidMount() {
    axios.get('api/v1/diaries/' + this.props.diary._id.$oid + '/sections')
      .then(response => {
        this.setState({
          sections: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const {isOpened} = this.state;
    return (
      <div className="diary">
        <h2 onClick={() => this.setState({ isOpened: !isOpened })}>{this.props.diary.date_pub}</h2>
        <Collapse isOpened={isOpened} hasNestedCollapse={true}>
          <p><a href={this.props.diary.pdf_url} target="_blank">Complete PDF</a></p>
          <SectionsContainer sections={this.state.sections} diary={this.props.diary} />
        </Collapse>
      </div >
    )
  }
}
export default Diary;
