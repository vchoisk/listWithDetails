import React from 'react';
import { connect } from 'react-redux';

import ListComponent from './list_component.jsx';
import listActions from './detail_list_actions.js';

console.log(listActions);

const mapStateToProps = (state) => {
  return {
    items: state.listReducer,//in order to change the "version" of the props, change this state.list to sth else
    selectedItem: state.selectedItemReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: (item) => {
      dispatch(listActions.selectItem(item));
    }
  }
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);

export default ListContainer;