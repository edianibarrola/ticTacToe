import React from "react";
import { PlayerSelect } from "./PlayerSelect";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<PlayerSelect />
		</div>
	);
}
