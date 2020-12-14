 import React from "react";

 export class GameBoard extends React.Component{
 constructor(){
 super();
 this.state= {
     squareValues: ['','','','','','','','','']
 };    
 };
 
updateNextMove(squarePressed){
    //mapping through state and returning new square values
    var newSquareValues = this.state.squareValues.map(
        (item, position) =>
        //check to see if box was filled, if not fill it
        position == squarePressed ? this.props.currentPlayer : item
    )
    this.setState({squareValues: newSquareValues})
    this.props.onMove(squarePressed)
    this.checkForWinner(newSquareValues)
}
checkForWinner(newSquareValues){

//for each winboards  if it == new square values they win
    let winBoards = [ 
    [ 
        [1,1,1,0,0,0,0,0,0]   
    ],     
    [ 
        [0,0,0,1,1,1,0,0,0]   
    ], 
    [ 
        [0,0,0,0,0,0,1,1,1]   
    ],
    [ 
        [1,0,0,1,0,0,1,0,0]   
    ],
    [ 
        [0,1,0,0,1,0,0,1,0]   
    ],
    [ 
        [0,0,1,0,0,1,0,0,1]   
    ],
    [ 
        [1,0,0,0,1,0,0,0,1]   
    ],
    [ 
        [0,0,1,0,1,0,1,0,0]   
    ],
]
}
return (
    <div>
        <div className= "col-4" >
        1
        </div>
        <div className="col-4">
        2
        </div>
        <div className="col-4">
        3
        </div>
        <div className="col-4">
        4
        </div>
        <div className="col-4">
        5
        </div>
        <div className="col-4">
        6
        </div>
        <div className="col-4">
        7
        </div>
        <div className="col-4">
        8
        </div>
        <div className="col-4">
        9
        </div>
    </div>
);
};