const dummyState = [
  {
    a: 1,
    b: 1,
    c: 1,
  }, {
    a: 2,
    b: 2,
    c: 2,
  },
  {
    a: 3,
    b: 3,
    c: 3,
  }
]

function listReducer (state = dummyState, action) {
  switch (action) {
    // case 'FILTER':
    //   return state;
    default:
      return state;
  }
}

export default listReducer;