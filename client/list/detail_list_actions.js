function selectItem(selectedItem) {
  return {
    type: 'ITEM_SELECTED',
    selectedItem
  }
}

export default { selectItem }