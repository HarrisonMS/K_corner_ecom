import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);

	const { product, loading, error } = productDetails;
	const id = props.match.params.id;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detailsProduct(id));
		return () => {};
	}, []);
	console.log(qty);
	const handleQtyChange = (e) => {
		setQty(e.target.value);
	};
	const handleAddToCart = (e) => {
		props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
	};

	return (
		<div>
			{" "}
			<div className="back-to-results">
				<Link to="/products">Back</Link>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>{error}</div>
			) : (
				<div className="details">
					{" "}
					<div className="details-image">
						<img src={product.image} alt={product.name} />
					</div>
					<div className="details-info">
						<ul>
							<li>
								<h4>{product.name}</h4>
							</li>
							<li>
								<p>
									{product.rating} Stars ({product.numReviews})
								</p>
							</li>
							<li>
								Price: <b>${product.price}</b>
							</li>
							<li>
								Description:
								<div>{product.description}</div>
							</li>
						</ul>
					</div>
					<div className="details-action">
						<ul>
							<li>Price: {product.price}</li>
							<li>
								Status: {product.countInStock > 0 ? "In Stock" : "Unavailable"}
							</li>

							<li>
								Qty:
								<select value={qty} onChange={handleQtyChange}>
									{[...Array(product.countInStock).keys()].map((x) => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</li>
							<li>
								{product.countInStock > 0 && (
									<button onClick={handleAddToCart} className="button">
										Add To Cart
									</button>
								)}
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProductScreen;
