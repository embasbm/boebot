import React, { Component } from 'react';
import Item from "./Item";

class ItemsContainer extends Component {
  render() {
    return (
      <div className="ItemsContainer">
        <div className="items-list">
          {this.props.items.map((item, index) => {
            return (<Item item={item} key={index}/>)
          })}
        </div>
      </div>
    )
  }
}

export default ItemsContainer;
