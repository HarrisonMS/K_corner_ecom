import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
function CartScreen(props) {
	const cartItemDetails = useSelector((state) => state.cart);
	console.log("some cart state", cartItemDetails);
	const { cartItems, loading, error } = cartItemDetails;
	const productId = props.match.params.id;

	const qty = props.location.search
		? Number(props.location.search.split("=")[1])
		: 1;
	console.log(qty);
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, []);
	return loading ? (
		<div>Loadding</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<div className="cart">
			<div className="cart-list">
				<ul className="cart-list-containter">
					<li>
						<h3>Shopping Cart</h3>
						<div>Price:</div>
					</li>
					{cartItems.length === 0 ? (
						<div>Cart is empty</div>
					) : (
						cartItems.map((item) => (
							<div>
								<img src={item.image} alt="product" />
								<div className="cart-name">
									<div>{item.name}</div>
									<div>
										Qty:
										<select>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</div>
								</div>
							</div>
						))
					)}
				</ul>
			</div>
			<div className="cart-actions"></div>
			CartScreen
		</div>
	);
}

export default CartScreen;
