import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function ProductScreen(props) {
	const id = props.match.params.id;
	console.log(props.match.params);
	const product = data.products.find((x) => x._id === props.match.params.id);
	console.log(id);

	return (
		<div>
			{" "}
			<div>
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
							<b>{product.price}</b>
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
						<li>Qty: {product.price}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
