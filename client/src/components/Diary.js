import React, { Component } from 'react';
import axios from 'axios';
import SectionsContainer from "./SectionsContainer";
class Diary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: []
    }
  }

  componentDidMount() {
    axios.get('api/v1/diaries/' + this.props.diary._id.$oid + '/sections')
      .then(response => {
        console.log(response);
        this.setState({
          sections: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="diary-single-item">
        <h4>{this.props.diary.date_pub}</h4>
        <p>{this.props.diary.pdf_url}</p>
        <div className="sections">
          <SectionsContainer sections={this.state.sections} diary={this.props.diary} />
        </div>
      </div >
    )
  }
}
export default Diary;
