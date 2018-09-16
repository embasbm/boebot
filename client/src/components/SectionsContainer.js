import React, { Component } from 'react';
import Section from "./Section";

class SectionsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Sections-container">
        {this.props.sections.map((section, index) => {
          return (<Section section={section} key={index} diary={this.props.diary}/>)
        })}
      </div>
    )
  }
}

export default SectionsContainer;
