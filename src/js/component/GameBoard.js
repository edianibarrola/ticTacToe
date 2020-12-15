import React from "react";
import PropTypes from "prop-types";
export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squareValues: ["", "", "", "", "", "", "", "", ""]
		};
	}

	updateNextMove(squarePressed) {
		//mapping through state and returning new square values
		var newSquareValues = this.state.squareValues.map(
			(item, position) =>
				//check to see if box was filled, if not fill it
				position == squarePressed && position == ""
					? this.props.currentPlayer
					: item
		);
		this.setState({ squareValues: newSquareValues });
		this.props.onMove(squarePressed);
		this.checkForWinner(newSquareValues);
		this.props.prop2();
		this.checkForWinner(newSquareValues);
	}
	checkForWinner = newSquareValues => {
		//for each winboards  if it == new square values they win
		let winBoards = [
			[1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];
		var winner = "";
		winBoards.forEach(winningCombo => {
			var counter = 0;
			for (let i = 0; i < winningCombo.length; i++) {
				if (winningCombo[i] == 1) {
					if (newSquareValues[i] == this.props.currentPlayer) {
						counter++;
						if (counter > 2) {
							this.props.prop3(this.props.currentPlayer);
						}
					}
				}
			}
		});
	};
	render() {
		return (
			<div className="container">
				<div className="gameArea centered" id="0">
					<div className="row ">
						<div className="gameBox col-4" id="1" />
						<div className="gameBox col-4" id="2" />
						<div className="gameBox col-4" id="3" />
						<div className="gameBox col-4" id="4" />
						<div className="gameBox col-4" id="5" />
						<div className="gameBox col-4" id="6" />
						<div className="gameBox col-4" id="7" />
						<div className="gameBox col-4" id="8" />
						<div className="gameBox col-4" id="9" />
					</div>
				</div>
			</div>
		);
	}
}
GameBoard.propTypes = {
	onMove: PropTypes.func,
	currentPlayer: PropTypes.string,
	prop2: PropTypes.func,
	prop3: PropTypes.func
};
