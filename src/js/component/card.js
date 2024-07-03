import React from "react";

export const Card = ({name,text,img}) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={img}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">
					{text}
				</p>

				<hr className="my-4" />

				<a href="#" className="btn btn-primary">
					find Out More!
				</a>
			</div>
		</div>
	);
};