import React, { useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
function ProductListScreen(props) {
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	console.log(products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());
		return () => {};
	}, []);
	return loading ? (
		<div>Loadding</div>
	) : error ? (
		<div>{error}</div>
	) : (
		<div>
			<ul className="products">
				{products.map((product) => (
					<li key={product.id}>
						<div className="product">
							<Link to={`/products/${product.id}`}>
								<img
									className="product-image"
									src={product.image}
									alt="product"
								/>

								<div className="product-name">{product.name}</div>
							</Link>
							<div className="product-brand">{product.brand}</div>
							<div className="product-price">${product.price}</div>
							<div className="product-rating">
								{product.rating} Stars ({product.numReviews} Reviews)
							</div>
						</div>{" "}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductListScreen;
