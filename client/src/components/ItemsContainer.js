import React, { Component } from 'react';
import Item from "./Item";

class ItemsContainer extends Component {
  render() {
    return (
      <div className="items">
        {this.props.items.map((item, index) => {
          return (
            <Item
              item={item}
              key={index}
              department={this.props.department}
              epigraph={this.props.epigraph}
            />
          )
        })}
      </div>
    )
  }
}

export default ItemsContainer;
