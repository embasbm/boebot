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
      <div
        className="diary-single-item"
        onClick={() => this.setState({ isOpened: !isOpened })}
        >
        <h4>{this.props.diary.date_pub}</h4>
        <p>{this.props.diary.pdf_url}</p>
        <Collapse isOpened={isOpened} hasNestedCollapse={true}>
          <div className="sections">
            <SectionsContainer sections={this.state.sections} diary={this.props.diary} />
          </div>
        </Collapse>
      </div >
    )
  }
}
export default Diary;
