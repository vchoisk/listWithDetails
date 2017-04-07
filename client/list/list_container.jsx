import React from 'react';
import { connect } from 'react-redux';

import ListComponent from './list_component.jsx';
// import listAction from './list_actions.js';

const mapStateToProps = (state) => {
  return {
    items: state.listReducer //in order to change the "version" of the props, change this state.list to sth else
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);

export default ListContainer;