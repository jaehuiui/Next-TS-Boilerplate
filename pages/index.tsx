import React from "react";
import Meta from "@lib/utils/meta";
import HomeTemplate from "@temp/home";

export default function Home() {
	return (
		<>
			<Meta
				name={"Boilerplate"}
				title={"Boilerplate | Home"}
				description={"Write your own description here"}
			/>
			<HomeTemplate />
		</>
	);
}
