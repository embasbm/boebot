import React from 'react';

const Item = ({ item }) =>
  <div className="item">
    <h4>{item.title}</h4>
    <p><a href={item.pdf_url} target="_blank">Complete PDF</a></p>
  </div>

export default Item;
