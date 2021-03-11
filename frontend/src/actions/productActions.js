import axios from "axios";
import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const { data } = await axios.get("http://localhost:5333/api/products");
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.products });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};

const detailsProduct = (productId) => async (dispatch) => {
	console.log(dispatch, productId);
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
		const { data } = await axios.get(
			`http://localhost:5333/api/products/${productId}`
		);
		console.log("details res", data);
		dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data.product });
	} catch (error) {
		dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
	}
};

export { listProducts, detailsProduct };
