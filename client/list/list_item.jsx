import React from 'react';

const ListItem = ({item}) => (
  <div>
    {Object.keys(item).map((col) => (
    <div className="list_item" key={col}>
      <span>{col}</span> : <span>{item[col]}</span>
    </div>))}
  </div>);

export default ListItem;