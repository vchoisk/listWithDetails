function selectedItemReducer (state = {id: null}, action) {
  switch (action.type) {
    case 'ITEM_SELECTED':
      return action.selectedItem;
    default:
      return state;
  }
}

export default selectedItemReducer;