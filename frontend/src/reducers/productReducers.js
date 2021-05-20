import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/ProductConstants';

const productListReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    default:
      return state;
  }
};