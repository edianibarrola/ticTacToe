import React from "react";
import { PlayerSelect } from "./PlayerSelect";
import { GameBoard } from "./GameBoard";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			winner: "",
			player1: "",
			player2: ""
		};
	}
	setTurn = (symbol, player1, player2) => {
		this.setState({ player: symbol, player1: player1, player2: player2 });
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
		if (this.state.winner == "") {
			return (
				<div className="text-center mt-5">
					{this.state.player == "" ? (
						<PlayerSelect onSetTurn={this.setTurn} />
					) : (
						<GameBoard
							currentPlayer={this.state.player}
							propNextTurn={this.nextTurn}
							propSetWinner={this.setWinner}
						/>
					)}{" "}
				</div>
			);
		} else if (this.state.winner != "") {
			return (
				<h1>
					Congratulations{" "}
					{this.state.winner == "X"
						? this.state.player1
						: this.state.player2}
				</h1>
			);
		}
	}
}
