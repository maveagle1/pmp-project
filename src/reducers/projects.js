export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_PROJECTS_FULFILLED':
      console.log('payload', action.payload);
      return [...action.payload.data];
    case 'ADD_TO_PROJECTS_FULFILLED':
      return [...action.payload.data];
    default:
      return state;
  }
}
