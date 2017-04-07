import React from 'react';

const ListComponent = ({title, items}) => {
  console.log("items in list component", items);
  return  (<div>
    <div>{title}</div>
    {items.map((item) => {
      let cols = Object.keys(item);
      return cols.map((col) => (
        <div className="list_item">
          <span>{col}</span> : <span>{item[col]}</span>
        </div>
      ))
    })}
  </div>)
};

export default ListComponent;