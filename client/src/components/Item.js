import React from 'react';

const Item = ({ item }) =>
  <div className="single-item">
    <h4>{item.title}</h4>
    <p>{item.pdf_url}</p>
  </div>

export default Item;
