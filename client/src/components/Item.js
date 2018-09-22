import React, { Component } from 'react';
class Item extends Component {

  render() {
    const { item, department, epigraph } = this.props;
    let title, content;

    if (item.epigraph_id && epigraph) {
      title = <h4>{epigraph.name}</h4>;
      content = <p>{item.title}</p>
    }
    if (item.department_id && department) {
      title = <h4>{item.title}</h4>;
      content = <h5>{department.name}</h5>
    }
    if (item.department_name) {
      title = <h4>{item.title}</h4>;
      content = <h5>{item.department_name}</h5>
    }
    if (item.epigraph_name) {
      title = <h4>{item.epigraph_name}</h4>;
      content = <h5>{item.title}</h5>
    }

    return (
      <div className="item">
        {console.log('title: ', title)}
        {console.log('content: ', content)}
        {title}
        {content}
        <p><a href={item.pdf_url} target="_blank">Complete PDF</a></p>
      </div>
    )
  }
}

export default Item;
