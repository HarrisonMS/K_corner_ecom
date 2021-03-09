import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(detailsProduct());
		return () => {};
	}, []);
	// const id = props.match.params.id;
	// console.log(props.match.params);
	// const product = data.products.find((x) => x._id === props.match.params.id);
	// console.log(id);

	return (
		<div>
			{" "}
			<div className="back-to-results">
				<Link to="/">Back</Link>
			</div>
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
						<li>Status: {product.status}</li>
						<li>
							Qty:
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</li>
						<li>
							<button className="button">Add To Cart</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
