import React from 'react';

const Item = ({ item, index }) =>
  <div className="single-item" key={index}>
    <h4>{item.title}</h4>
    <p>{item.pdf_url}</p>
  </div>

export default Item;
