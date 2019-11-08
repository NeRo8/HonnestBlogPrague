import data from '../data/cashExchange.json';
const initialState = {
  layoutCash: data,
};

const layoutsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default layoutsReducer;
