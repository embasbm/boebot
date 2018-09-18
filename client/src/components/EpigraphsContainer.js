import React, { Component } from 'react';
import Epigraph from "./Epigraph";

class EpigraphsContainer extends Component {
  render() {
    return (
      <div className="epigraphs">
        {this.props.epigraphs.map((epigraph, index) => {
          return (
            <Epigraph
              diary={this.props.diary}
              section={this.props.section}
              department={this.props.department}
              epigraph={epigraph}
              key={index}
            />
          )
        })}
      </div>
    )
  }
}

export default EpigraphsContainer;
