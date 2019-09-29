const initialState = {

};

const data = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'RESET_ALL':
      return {
        initialState,
      };
    case 'SUBMIT':
      return {
        ...state,
        output: payload,
      };
    default:
      return state;
  }
};
