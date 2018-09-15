import React from 'react';

const Diary = ({ diary, index }) =>
  <div className="single-item" key={index}>
    <h4>{diary.date_pub}</h4>
    <p>{diary.pdf_url}</p>
  </div>

export default Diary;
