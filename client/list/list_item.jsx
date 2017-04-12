import React from 'react';

const ListItem = ({item, selectItem}) => (
  <div onClick={() => selectItem(item)}>
    {Object.keys(item).map((col) => (
    <span className="list_item" key={col}>
      <span className={col}>{col}</span> : <span className={col + "_value"}>{item[col]}</span>
    </span>))}
  </div>);

export default ListItem;