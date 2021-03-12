import React from "react";
// import { image } from "./";
function HomeScreen(props) {
	return (
		<div className="home-container">
			<div className="home-top-left">
				<div className="home-top-left-content">
					<h1 className="home-h1">Kellys Corner</h1>
					<p>
						lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor
						lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor sit amet,
						consectetur adipis lorem ipsum dolor lorem ipsum dolor lorem ipsum
						dolor
					</p>
					<div className="home-button-wrap">
						<button
							onClick={() => props.history.push("/products")}
							className="btn prim-btn"
						>
							Shop Now
						</button>
						<button className="btn sec-button">Read More</button>
					</div>
				</div>
			</div>

			<div className="home-top-right"></div>
		</div>
	);
}

export default HomeScreen;
