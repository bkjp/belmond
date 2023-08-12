import { PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_REQUEST } from "../actions/product.action";


const initialState = []

export default function productListReducer(state=initialState, action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return action.payload;     

        case PRODUCT_DETAILS_REQUEST:
            return action.payload;  

        default:
            return state;
    }

}
