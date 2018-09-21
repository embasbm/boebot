import React, { Component } from 'react';
import axios from 'axios';
import { Collapse } from 'react-collapse';

import SectionsContainer from "./SectionsContainer";
import ItemsContainer from './ItemsContainer';

class Diary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      search_result: [],
      sections: []
    }
  }

  componentDidMount() {
    axios.get('api/v1/diaries/' + this.props.diary._id.$oid + '/sections')
      .then(response => {
        this.setState({
          sections: response.data,
          search_result: []
        })
      })
      .catch(error => console.log(error))
  }

  searchItems() {
    axios.get('api/v1/diaries/search', { params: { search: this.state.query } })
      .then(({ data }) => {
        console.log('data: ', data);
        if (data.search) {
          this.setState({
            search_result: data.search,
            isOpened: false,
            sections: []
          })
        } else {
          this.setState({
            search_result: []
          })
        }
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.searchItems()
        }
      }
    })
  }

  render() {
    const { isOpened, search_result, sections} = this.state;
    return (
      <div className="diary">
        <h2 onClick={() => this.setState({ isOpened: !isOpened })}>{this.props.diary.date_pub}</h2>
        <p><a href={this.props.diary.pdf_url} target="_blank">Complete PDF</a></p>
        <form className="search-items-form">
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
        {search_result &&
          <Collapse isOpened={isOpened} hasNestedCollapse={true}>
            <ItemsContainer items={search_result} />
          </Collapse>
        }
        {sections &&
          <Collapse isOpened={isOpened} hasNestedCollapse={true}>
            <SectionsContainer sections={sections} diary={this.props.diary} />
          </Collapse>
        }
      </div>
    )
  }
}
export default Diary;
