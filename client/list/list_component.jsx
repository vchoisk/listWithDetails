import React from 'react';

import ListItem from './list_item.jsx';
import ExpendItem from './expend_item.jsx';

const ListComponent = ({title, items, selectedItem, selectItem}) => (
  <div>
    <div>{title}</div>
    {items.map((item) => (
      item.id !== selectedItem.id ?
        <ListItem key={item.id}
                  item={item}
                  selectItem={selectItem}/> :
        <ExpendItem key={selectedItem.id}
                    item={selectedItem} />
    ))}
  </div>);

export default ListComponent;