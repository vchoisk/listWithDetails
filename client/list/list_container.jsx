import React from 'react';

// import listAction from './list_actions.js';

const mapStateToProps = (state) => {
  return {
    items: state.list //in order to change the "version" of the props, change this state.list to sth else
  }
}