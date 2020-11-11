export default (state = [], action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return action.payload;

    default:
      return state;
  }
};
