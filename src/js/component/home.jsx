import React from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const myInfo = [
		{
			name: "Prueba1",
			img: "https://picsum.photos/id/221/200",
			text: "lalalalalallal"
		},
		{
			name: "Prueba2",
			img: "https://picsum.photos/id/156/200",
			text: "shsfhsfhfh"
		},
		{
			name: "Prueba3",
			img: "https://picsum.photos/id/222/200",
			text: "sfhshsfhfhjj"
		},
		{
			name: "Prueba4",
			img: "https://picsum.photos/id/199/200",
			text: "ltituituityi"
		}
	]
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="container">
				<div className="row">
					{myInfo.map((item)=> (<div className="col-sm"><Card name={item.name} img={item.img} text={item.text}/></div>))}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;