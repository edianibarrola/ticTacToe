import React from "react";
import { PlayerSelect } from "./PlayerSelect";
import { GameBoard } from "./GameBoard";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			winner: ""
		};
	}
	setTurn = (symbol, player1, player2) => {
		this.setState({ player: symbol });
		// this sets player with a value from PlayerSelect and sets first symbol
	};
	nextTurn = () => {
		this.setState({ player: this.state.player == "X" ? "O" : "X" });
		// this sets player with a value from PlayerSelect and sets first symbol
	};
	setWinner = player => {
		this.setState({ winner: player });
	};
	render() {
		return (
			<div className="text-center mt-5">
				<PlayerSelect onSetTurn={this.setTurn} />
				<GameBoard
					currentPlayer={this.state.player}
					prop2={this.state.nextTurn}
					prop3={this.setWinner}
				/>
			</div>
		);
	}
}
