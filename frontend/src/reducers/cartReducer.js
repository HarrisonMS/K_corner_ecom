import {
	CART_ADD_ITEM_SUCCESS,
	CART_ADD_REQUEST,
	CART_ADD_FAIL,
} from "../constants/cartConstants";
import { addItemToCart } from "./cartUtils";
const INITIAL_STATE = {
	loading: false,
	cartItems: [],
};
function cartReducer(state = INITIAL_STATE, action) {
	console.log("in the reducer", action.type, action.payload);
	console.log("cart items", state.cartItems);
	switch (action.type) {
		case CART_ADD_REQUEST:
			return {
				loading: true,
			};
		case CART_ADD_ITEM_SUCCESS:
			return {
				...state,
				cartItems: [
					...state.cartItems,
					action.payload,
					// addItemToCart(state.cartItems, action.payload),
				],
			};

		case CART_ADD_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
}

export { cartReducer };
