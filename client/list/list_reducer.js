const dummyState = [
  {
    id: 1,
    a: 1,
    b: 1,
    c: 1,
  }, {
    id: 2,
    a: 2,
    b: 2,
    c: 2,
  },
  {
    id: 3,
    a: 3,
    b: 3,
    c: 3,
  }
]

function listReducer (state = dummyState, action) {
  switch (action.type) {
    // case 'FILTER':
    //   return state;
    default:
      return state;
  }
}

export default listReducer;