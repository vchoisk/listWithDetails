import React from 'react';

import ListItem from './list_item.jsx';

const ListComponent = ({title, items}) => (
  <div>
    <div>{title}</div>
    {items.map((item) => (
      <ListItem item={item} key={item[Object.keys(item)[0]]}/>
    ))}
  </div>);

export default ListComponent;