import axios from "axios";
import {
	CART_ADD_ITEM_SUCCESS,
	CART_ADD_REQUEST,
	CART_ADD_FAIL,
} from "../constants/cartConstants";
const addToCart = (productId, qty) => async (dispatch) => {
	try {
		dispatch({ type: CART_ADD_REQUEST });
		const { data } = await axios.get(
			`http://localhost:5333/api/products/${productId}`
		);
		console.log("data in cart action", data);
		dispatch({
			type: CART_ADD_ITEM_SUCCESS,
			payload: {
				product: data.product.id,
				name: data.product.name,
				image: data.product.image,
				price: data.product.price,
				countInStock: data.product.countInStock,
				qty: qty,
			},
		});
	} catch (error) {
		dispatch({ type: CART_ADD_FAIL, payload: error.message });
	}
};

export { addToCart };
