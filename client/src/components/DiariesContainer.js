import React, { Component } from 'react';
import Diary from './Diary';
import axios from 'axios';

class DiariesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      diaries: []
    }
  }

  componentDidMount(){
    axios.get('api/v1/diaries.json')
    .then(response => {
      console.log(response);
      this.setState({
        diaries: response.data
      })
    })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Diaries-container">
        {this.state.diaries.map( (diary, index) => {
          return (<Diary diary={diary} key={index} />)
        })}
      </div>
    )
  }
}

export default DiariesContainer;
