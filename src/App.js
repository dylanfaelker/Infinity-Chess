import React, { useState } from 'react'
import Board from './components/Board'
import bbishop from './bbishop.png'
import wbishop from './wbishop.png'
import bknight from './bknight.png'
import wknight from './wknight.png'
import brook from './brook.png'
import wrook from './wrook.png'
import bking from './bking.png'
import wking from './wking.png'
import bqueen from './bqueen.png'
import wqueen from './wqueen.png'
import bpawn from './bpawn.png'
import wpawn from './wpawn.png'
import { isCompositeComponent } from 'react-dom/cjs/react-dom-test-utils.production.min'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares:[{
            id:1,
            squareColor:true,
            piece: 4,
            pieceColor: false,
            icon: <img src={brook} className="piece-img" alt="brook"/>,
        },
        {
            id:2,
            squareColor:false,
            piece: 3,
            pieceColor: false,
            icon: <img src={bknight} className="piece-img" alt="bknight"/>,
        },
        {
            id:3,
            squareColor:true,
            piece: 2,
            pieceColor: false,
            icon: <img src={bbishop} className="piece-img" alt="bbishop"/>,
        },
        {
            id:4,
            squareColor:false,
            piece: 5,
            pieceColor: false,
            icon: <img src={bqueen} className="piece-img" alt="bqueen"/>,
        },
        {
            id:5,
            squareColor:true,
            piece: 6,
            pieceColor: false,
            icon: <img src={bking} className="piece-img" alt="bking"/>,
        },
        {
            id:6,
            squareColor:false,
            piece: 2,
            pieceColor: false,
            icon: <img src={bbishop} className="piece-img" alt="bbishop"/>,
        },
        {
            id:7,
            squareColor:true,
            piece: 3,
            pieceColor: false,
            icon: <img src={bknight} className="piece-img" alt="bknight"/>,
        },
        {
            id:8,
            squareColor:false,
            piece: 4,
            pieceColor: false,
            icon: <img src={brook} className="piece-img" alt="brook"/>,
        },
        {
            id:9,
            squareColor:true,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:10,
            squareColor:false,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:11,
            squareColor:true,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:12,
            squareColor:false,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:13,
            squareColor:true,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:14,
            squareColor:false,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:15,
            squareColor:true,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:16,
            squareColor:false,
            piece: 1,
            pieceColor: false,
            icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
        },
        {
            id:17,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:18,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:19,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:20,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:21,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:22,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:23,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:24,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:25,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:26,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:27,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:28,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:29,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:30,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:31,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:32,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:33,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:34,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:35,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:36,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:37,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:38,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:39,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:40,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:41,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:42,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:43,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:44,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:45,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:46,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:47,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:48,
            squareColor:false,
            piece: 0,
            pieceColor: '',
            icon: '',
        },
        {
            id:49,
            squareColor:true,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:50,
            squareColor:false,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:51,
            squareColor:true,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:52,
            squareColor:false,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:53,
            squareColor:true,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:54,
            squareColor:false,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:55,
            squareColor:true,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:56,
            squareColor:false,
            piece: 1,
            pieceColor: true,
            icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
        },
        {
            id:57,
            squareColor:true,
            piece: 4,
            pieceColor: true,
            icon: <img src={wrook} className="piece-img" alt="wrook"/>,
        },
        {
            id:58,
            squareColor:false,
            piece: 3,
            pieceColor: true,
            icon: <img src={wknight} className="piece-img" alt="wknight"/>,
        },
        {
            id:59,
            squareColor:true,
            piece: 2,
            pieceColor: true,
            icon: <img src={wbishop} className="piece-img" alt="wbishop"/>,
        },
        {
            id:60,
            squareColor:false,
            piece: 5,
            pieceColor: true,
            icon: <img src={wqueen} className="piece-img" alt="wqueen"/>,
        },
        {
            id:61,
            squareColor:true,
            piece: 6,
            pieceColor: true,
            icon: <img src={wking} className="piece-img" alt="wking"/>,
        },
        {
            id:62,
            squareColor:false,
            piece: 2,
            pieceColor: true,
            icon: <img src={wbishop} className="piece-img" alt="wbishop"/>,
        },
        {
            id:63,
            squareColor:true,
            piece: 3,
            pieceColor: true,
            icon: <img src={wknight} className="piece-img" alt="wknight"/>,
        },
        {
            id:64,
            squareColor:false,
            piece: 4,
            pieceColor: true,
            icon: <img src={wrook} className="piece-img" alt="wrook"/>,
        },
      ],
      moves:[],
      selectedPiece:[false, 
        {
          id:0,
          squareColor:true,
          piece: 0,
          pieceColor: true,
          icon: '',
        }
      ],
      turn:true,
      enpassent:0,
    }
  }

  selecting(square) {
    this.state.selectedPiece[0] ? this.checkMove(square) : this.pickPiece(square)
  }

  makeMove(square) {
    if (isEnpassent(square, this.state.selectedPiece[1], this.state.squares)) {//for enpassent moves
      this.setState({
        squares: this.state.squares.map((squareCheck) => {
          if (squareCheck.id === square.id) { 
            //moves the piece to the new square
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: this.state.selectedPiece[1].piece,
              pieceColor: this.state.selectedPiece[1].pieceColor,
              icon: this.state.selectedPiece[1].icon,
            }
          } else if  (squareCheck.id === this.state.selectedPiece[1].id) {
            //resets the square the piece is moving from
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: 0,
              pieceColor: '',
              icon: '',
            }
          } else if (squareCheck.id === this.state.enpassent) {
            //deletes the pawn on enpassent square
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: 0,
              pieceColor: '',
              icon: '',
            }
          } else {
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: squareCheck.piece,
              pieceColor: squareCheck.pieceColor,
              icon: squareCheck.icon,
            }
          }
        }),
        selectedPiece:[false, 
          {
            id:0,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
          }
        ],
        moves:[],
        turn:!this.state.turn,
        enpassent: 0,
      })
    } else {//for normal moves
      this.setState({
        enpassent: (Math.abs(square.id-this.state.selectedPiece[1].id)===16 && this.state.selectedPiece[1].piece===1) ? square.id : 0,
        squares: this.state.squares.map((squareCheck) => {
          if (squareCheck.id === square.id) { 
            //moves the piece to the new square
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: this.state.selectedPiece[1].piece,
              pieceColor: this.state.selectedPiece[1].pieceColor,
              icon: this.state.selectedPiece[1].icon,
            }
          } else if  (squareCheck.id === this.state.selectedPiece[1].id) {
            //resets the square the piece is moving from
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: 0,
              pieceColor: '',
              icon: '',
            }
          } else {
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: squareCheck.piece,
              pieceColor: squareCheck.pieceColor,
              icon: squareCheck.icon,
            }
          }
        }),
        selectedPiece:[false, 
          {
            id:0,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
          }
        ],
        moves:[],
        turn:!this.state.turn,
      })
    }
   if(isOver(this.state.squares, this.state.turn, this.state.enpassent)) {
     //do smth to stop play
     if (inCheck(this.state.squares, this.state.turn, this.state.enpassent)) {
       //!turn wins
       console.log('checkmate')
     } else {
       //stalemate
       console.log('stalemate')
     }
   }
  }

  unselectMaybe(square) {
    (square.piece && square.pieceColor===this.state.turn) ?
      this.setState({ //if selecting new piece
        moves:findMoves(square, this.state.squares, this.state.enpassent),
        selectedPiece:[true,
          {
            id:square.id,
            squareColor:square.squareColor,
            piece:square.piece,
            pieceColor: square.pieceColor,
            icon: square.icon,
          }
        ],
      }) :
      this.setState({ //if just deselecting
        moves:[],
        selectedPiece:[false, 
          {
            id:0,
            squareColor:true,
            piece: 0,
            pieceColor: '',
            icon: '',
          }
        ]
      })
  }

  unselect() {
    this.setState({
      moves:[],
      selectedPiece: [ false,  //if just deselecting
        {
          id:0,
          squareColor:true,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      ]}) 
  }

  select(square) {
    this.setState({
      moves:findMoves(square, this.state.squares, this.state.enpassent),
      selectedPiece:[true,
        {
          id:square.id,
          squareColor:square.squareColor,
          piece:square.piece,
          pieceColor: square.pieceColor,
          icon: square.icon,
        }
      ]
    }) 
  }

  checkMove(square) {
    this.state.moves.includes(square.id) ?
      this.makeMove(square) : //when move made is legal
      this.unselectMaybe(square) //when move made is illegal
  }

  pickPiece(square) {
    (square.piece && square.pieceColor===this.state.turn) ? 
      this.select(square) : //when clicked on piece
      this.unselect() //when clicked on empty square or wrong team
  }

  render() {
    return (
      <div className='App'>
        <div className="game">
          <Board 
            squares={this.state.squares}
            onSelect={this.selecting.bind(this)}
            moves={this.state.moves}
            selectedNum={this.state.selectedPiece[1].id}
          />
        </div>
      </div>
    );
  }
}

//checks if an enpassent move is being made
function isEnpassent(newSquare, oldSquare, squares) {
  if(oldSquare.piece===1) { //check if pawn is being moved
    if((Math.abs(oldSquare.id-newSquare.id)===7 || Math.abs(oldSquare.id-newSquare.id)===9) && newSquare.piece===0) { //checks if moved diagonally and newSquare doesnt have a piece on it
      return true
    }
  }
  return false
}

function findMoves(square, squares, enpassent) {
  var moves=[]

  switch(square.piece) {
    case 1: //pawn
      moves=pawnMove(square, squares, enpassent)
      break;
    case 2: //bishop
      moves=bishopMove(square, squares)
      break;
    case 3: //knight
      moves=knightMove(square, squares)
      break;
    case 4: //rook
      moves=rookMove(square, squares)
      break;
    case 5: //queen
      let movesD=bishopMove(square, squares)
      let movesS=rookMove(square, squares)
      moves=movesD.concat(movesS)
      break;
    case 6: //king
      moves=kingMove(square, squares)
      break;
  }


  return moves
}

//returns a square found by searching the ids
function getSquare(id, squares) {
  for (const square of squares) {
    if (square.id === id) {
      return square
    }
  }
}

//TODO make sure the move you make wont put you king in check

//TODO make castle work
function kingMove(square, squares) {
  var moves=[]
  var num=square.id
  if((num-1) %8 === 0) {//when wraps on the left side
    var newNum=num+1
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+7
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+8
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-8
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-7
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+9
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-1
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  } else if ((num-1) %8 === 7) {//when wraps on the right side
    var newNum=num-7
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-1
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+8
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-8
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+7
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+1
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-9
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  } else {
    var newNum=num+1
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-1
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+8
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-8
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+7
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-7
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+9
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-9
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  }
  return moves
}

function rookMove(square, squares) {
  var moves = []
  var num=square.id

  var newNum = num+8
  //checks the the new square is in the right range (1,64), that the new square is not on the same team, that the square last checked wasnt a square where the rook takes, that the horizontal moves dont loop
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(newNum-8, squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum+=8
  }
  newNum=num-8
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(newNum+8, squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum-=8
  }
  newNum=infinityRight(num+1)
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(infinityLeft(newNum-1), squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum=infinityRight(newNum+1)
  }
  newNum=infinityLeft(num-1)
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(infinityRight(newNum+1), squares).pieceColor !== !square.pieceColor && square.id !== newNum) {
    moves.push(newNum)
    newNum=infinityLeft(newNum-1)
  }

  return moves
}

function knightMove(square,squares) {
  var moves = []
  var num=square.id

  if ((num-1) %8 === 0) { //for when it will wrap across the left side
    let newNum=num+14
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+10
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+23
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-6
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-2
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-9
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  } else if ((num-1) %8 === 1) { //for when it will wrap across the left side
    let newNum=num+14
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+10
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-6
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-2
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  } else if ((num-1) %8 === 7) { //for when it will wrap across the right side
    let newNum=num+6
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+2
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+9
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-14
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-10
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-23
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  } else if ((num-1) %8 === 6) { //for when it will wrap across the right side
    let newNum=num+6
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+2
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-14
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-10
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  } else { //for when it will not wrap
    let newNum=num+6
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+10
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num+17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-6
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-10
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-15
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
    newNum=num-17
    if(newNum>=1 && newNum<=64 && getSquare(newNum, squares).pieceColor !== square.pieceColor){
      moves.push(newNum)
    }
  }
  return moves
}

function bishopMove(square, squares) {
  var moves = []
  var num=square.id

  var newNum = infinityRight(num+9)
  //checks the the new square is in the right range (1,64), that the new square is not on the same team and that the square last checked wasnt a square where the rook takes
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(infinityLeft(newNum-9), squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum=infinityRight(newNum+9)
  }
  newNum=infinityLeft(num-9)
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(infinityRight(newNum+9), squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum=infinityLeft(newNum-9)
  }
  newNum=infinityLeft(num+7)
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(infinityRight(newNum-7), squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum=infinityLeft(newNum+7)
  }
  newNum=infinityRight(num-7)
  while (newNum >= 1 && newNum <= 64 && getSquare(newNum, squares).pieceColor !== square.pieceColor && getSquare(infinityLeft(newNum+7), squares).pieceColor !== !square.pieceColor) {
    moves.push(newNum)
    newNum=infinityRight(newNum-7)
  }

  return moves
}

function pawnMove(square, squares, enpassent) {
  var moves = []
  var num=square.id
  var row=Math.ceil(square.id/8)

  if (square.pieceColor) { //white pawn
    moves.push(num-8)
    if(row===7) {
      moves.push(num-16)
    }
    if(getSquare(infinityLeft(num-9), squares).pieceColor === !square.pieceColor) {
      moves.push(infinityLeft(num-9))
    }
    if(getSquare(infinityRight(num-7), squares).pieceColor === !square.pieceColor) {
      moves.push(infinityRight(num-7))
    }
    if (infinityRight(num+1) ===enpassent) {
      moves.push(infinityRight(num-7))
    }
    if (infinityLeft(num-1) ===enpassent) {
      moves.push(infinityLeft(num-9))
    }
  } else { //black pawn
    moves.push(num+8)
    if(row===2) {
      moves.push(num+16)
    }
    if(getSquare(infinityRight(num+9), squares).pieceColor === !square.pieceColor) {
      moves.push(infinityRight(num+9))
    }
    if(getSquare(infinityLeft(num+7), squares).pieceColor === !square.pieceColor) {
      moves.push(infinityLeft(num+7))
    }
    if (infinityRight(num+1) ===enpassent) {
      moves.push(infinityRight(num+9))
    }
    if (infinityLeft(num-1) ===enpassent) {
      moves.push(infinityLeft(num+7))
    }
  }

  return moves
}

function isOver(squares, turn, enpassent) {
  var moves =[]

  for (const square of squares) {
    if (square.pieceColor === turn) {
      moves.push(findMoves(square, squares, enpassent))
    }
  }

  return moves.length === 0
}

function inCheck(squares, turn, enpassent) {
  for (const square in squares) {
    if (square.piece === 6 && square.pieceColor === turn) {
      return isAttacked(square, squares, enpassent)
    }
  }
}

function isAttacked(square, squares, enpassent) {
  var color = square.pieceColor
  var oppColor= !color

  for (const squareCheck in squares) { // loops through all squares on the board
    if (squareCheck.pieceColor === oppColor) { //checks if the current squares has a piece on the opposite team
      if (findMoves(squareCheck, squares, enpassent).includes(square.id)) { //checks if the piece will attack square
        return true
      }
    }
  }

  return false
}

function infinityRight(id) {
  if (id%8===1) {
    return id-8
  }
  else {
    return id
  }
}

function infinityLeft(id) {
  if (id%8===0) {
    return id+8
  }
  else {
    return id
  }
}

export default App;
