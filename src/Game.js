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

class Game extends React.Component {
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
      //wlong, wshort, blong, bshort
      castling:[true,true,true,true],
      checkmate:false,
      stalemate:false,
      draw:false,
      move50:0,
      history:[],
    }
  }

  selecting(square) {
    this.state.selectedPiece[0] ? this.checkMove(square) : this.pickPiece(square)
  }

  //TODO finish check stuff and isOver
  makeMove(square) {
    if (isEnpassent(square, this.state.selectedPiece[1])) {//for enpassent moves
      this.setState({
        history:this.state.history.concat([this.state.squares]),
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
        move50: 0,
      })
    } else if(isCastle(square, this.state.selectedPiece[1])) { //for castling

      var num=this.state.selectedPiece[1].id
      var oldId = 0
      var newId = 0
      if(this.state.selectedPiece[1].pieceColor && num+2 === square.id) { //white castle short
        newId=62
        oldId=64
      } else if(this.state.selectedPiece[1].pieceColor && num-2 === square.id) {  //white castle long
        newId=60
        oldId=57
      } else if(!this.state.selectedPiece[1].pieceColor && num+2 === square.id) { //black castle short
        newId=6
        oldId=8
      } else { //black castle long
        newId=4
        oldId=1
      }
      var newRook = {
        id:newId
      }
      var oldRook = {
        id:oldId,
        squareColor:getSquare(oldId, this.state.squares).squareColor,
        piece: getSquare(oldId, this.state.squares).piece,
        pieceColor: getSquare(oldId, this.state.squares).pieceColor,
        icon: getSquare(oldId, this.state.squares).icon,
      }

      this.setState({
        history:this.state.history.concat([this.state.squares]),
        castling: this.state.selectedPiece[1].pieceColor ? [false, false, this.state.castling[2], this.state.castling[3]] : [this.state.castling[0], this.state.castling[1], false, false],
        enpassent: 0,
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
          } else if(squareCheck.id === oldRook.id) {
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: 0,
              pieceColor: '',
              icon: '',
            }
          } else if(squareCheck.id === newRook.id) {
            return {
              id:squareCheck.id,
              squareColor:squareCheck.squareColor,
              piece: oldRook.piece,
              pieceColor: oldRook.pieceColor,
              icon: oldRook.icon,
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
        move50: this.state.move50+0.5,
      })
    } else {//for normal moves
      this.setState({
        history:this.state.history.concat([this.state.squares]),
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
        castling:changeCastle(this.state.selectedPiece[1], this.state.castling),
        move50: (square.piece !== 0 || this.state.selectedPiece[1].piece === 1) ? 0 : this.state.move50 + 0.5,
      })
    }

    var newSquares = pretendMove(square, this.state.selectedPiece[1], this.state.squares, this.state.enpassent)
    var newMove50 = (square.piece !== 0 || this.state.selectedPiece[1].piece === 1) ? 0 : this.state.move50+0.5
    if(isOver(newSquares, !this.state.turn, this.state.castling, this.state.enpassent)) {
     //do smth to stop play
     if (inCheck(newSquares, !this.state.turn, this.state.castling, this.state.enpassent)) {
       //turn wins
       this.setState({ checkmate:true })
     } else {
       //stalemate
       this.setState({ stalemate:true })
     }
   } else if(newMove50===50 || numAppears(newSquares, this.state.history) >= 2) {
    this.setState({ draw:true })
   }
  }

  unselectMaybe(square) {
    (square.piece && square.pieceColor===this.state.turn) ?
      this.setState({ //if selecting new piece
        moves:findMoves(square, this.state.squares, this.state.castling, this.state.enpassent),
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
      moves:findMoves(square, this.state.squares, this.state.castling, this.state.enpassent),
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
        <h1 className='header'>{this.state.draw ? 'Draw' : (this.state.checkmate ? 'Checkmate!' : (this.state.stalemate ? 'Stalemate' : (this.state.turn ? 'White\'s Turn' : 'Black\'s Turn')))}</h1>
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

//returns the number of times a position has already been reached
function numAppears(squares, history) {
  var count = 0
  for (const squaresCheck of history) {
    if(comapareBoards(squares, squaresCheck)) {
      count++
    }
  }

  return count
}

//determines if two boards are the same or not
function comapareBoards(squares1, squares2) {
  for(const square of squares1) {
    if(!inSquares(square, squares2)) {
      return false
    }
  }
  return true
}

//checks if there is a replica of square in squares
function inSquares(square, squares) {
  for(const squareCheck of squares) {
    if(square.id===squareCheck.id && square.piece===squareCheck.piece && square.pieceColor===squareCheck.pieceColor) {
      return true
    }
  }
  return false
}

function changeCastle(oldSquare, castling) {
  if(oldSquare.id === 1) {
    return [castling[0], castling[1], false, castling[3]]
  } else if(oldSquare.id === 8) {
    return [castling[0], castling[1], castling[2], false]
  } else if(oldSquare.id === 57) {
    return [false, castling[1], castling[2], castling[3]]
  } else if(oldSquare.id === 64) {
    return [castling[0], false, castling[2], castling[3]]
  } else if(oldSquare.piece === 6 && oldSquare.pieceColor) {
    return [false, false, castling[2], castling[3]]
  } else if (oldSquare.piece === 6 && !oldSquare.pieceColor) {
    return [castling[0], castling[1], false, false]
  }

  return castling
}

//checks if an enpassent move is being made
function isEnpassent(newSquare, oldSquare) {
  if(oldSquare.piece===1) { //check if pawn is being moved
    if((infinityRight(oldSquare.id-7)===newSquare.id || infinityRight(oldSquare.id+9)===newSquare.id || infinityLeft(oldSquare.id+7)===newSquare.id || infinityLeft(oldSquare.id-9)===newSquare.id) && newSquare.piece===0) { //checks if moved diagonally and newSquare doesnt have a piece on it
      return true
    }
  }
  return false
}

//checks if a castling move was made
function isCastle(newSquare, oldSquare) {
  //checks is piece moves was a king
  if(oldSquare.piece===6) {
    //checks if king didnt make a normal move
    if(infinityRight(oldSquare.id-7)!==newSquare.id && oldSquare.id-8!==newSquare.id && infinityLeft(oldSquare.id-9)!==newSquare.id && infinityRight(oldSquare.id+1)!==newSquare.id && infinityLeft(oldSquare.id-1)!==newSquare.id && infinityLeft(oldSquare.id+7)!==newSquare.id && oldSquare.id+8!==newSquare.id && infinityRight(oldSquare.id+9)!==newSquare.id) {
      return true
    }
  }

  return false
}

//make sure turn is passed in
function testMove(newSquare, oldSquare, squares, castling, enpassent, turn) {
  var newSquares
  var newCastling
  var newEnpassent
  //we want turn to be the same so we test if the right king is in check

  if (isEnpassent(newSquare, oldSquare)) {//for enpassent moves
    newSquares=squares.map((squareCheck) => {
      if (squareCheck.id === newSquare.id) { 
        //moves the piece to the new square
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldSquare.piece,
          pieceColor: oldSquare.pieceColor,
          icon: oldSquare.icon,
        }
      } else if  (squareCheck.id === oldSquare.id) {
        //resets the square the piece is moving from
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      } else if (squareCheck.id === enpassent) {
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
    })
    newCastling= [castling[0], castling[1], castling[2], castling[3]]
    newEnpassent=0
  } else if(isCastle(newSquare, oldSquare)) { //for castling

    var num=oldSquare.id
    var oldId = 0
    var newId = 0
    if(oldSquare.pieceColor && num+2 === newSquare.id) { //white castle short
      newId=62
      oldId=64
    } else if(oldSquare.pieceColor && num-2 === newSquare.id) {  //white castle long
      newId=60
      oldId=57
    } else if(!oldSquare.pieceColor && num+2 === newSquare.id) { //black castle short
      newId=6
      oldId=8
    } else { //black castle long
      newId=4
      oldId=1
    }
    var newRook = {
      id:newId
    }
    var oldRook = {
      id:oldId,
      squareColor:getSquare(oldId, squares).squareColor,
      piece: getSquare(oldId, squares).piece,
      pieceColor: getSquare(oldId, squares).pieceColor,
      icon: getSquare(oldId, squares).icon,
    }

    newCastling=oldSquare.pieceColor ? [false, false, castling[2], castling[3]] : [castling[0], castling[1], false, false]
    newEnpassent=0
    newSquares = squares.map((squareCheck) => {
      if (squareCheck.id === newSquare.id) { 
        //moves the piece to the new square
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldSquare.piece,
          pieceColor: oldSquare.pieceColor,
          icon: oldSquare.icon,
        }
      } else if  (squareCheck.id === oldSquare.id) {
        //resets the square the piece is moving from
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      } else if(squareCheck.id === oldRook.id) {
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      } else if(squareCheck.id === newRook.id) {
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldRook.piece,
          pieceColor: oldRook.pieceColor,
          icon: oldRook.icon,
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
    })
  } else {//for normal moves
    newSquares=squares.map((squareCheck) => {
      if (squareCheck.id === newSquare.id) { 
        //moves the piece to the new square
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldSquare.piece,
          pieceColor: oldSquare.pieceColor,
          icon: oldSquare.icon,
        }
      } else if  (squareCheck.id === oldSquare.id) {
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
    })
    newEnpassent=(Math.abs(newSquare.id-oldSquare.id)===16 && oldSquare.piece===1) ? newSquare.id : 0
    newCastling=changeCastle(oldSquare, castling)
  }
  return !inCheckSafe(newSquares, turn, newCastling, newEnpassent)
}

function pretendMove(newSquare, oldSquare, squares, enpassent) {
  var newSquares
  if (isEnpassent(newSquare, oldSquare)) {//for enpassent moves
    newSquares=squares.map((squareCheck) => {
      if (squareCheck.id === newSquare.id) { 
        //moves the piece to the new square
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldSquare.piece,
          pieceColor: oldSquare.pieceColor,
          icon: oldSquare.icon,
        }
      } else if  (squareCheck.id === oldSquare.id) {
        //resets the square the piece is moving from
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      } else if (squareCheck.id === enpassent) {
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
    })
  } else if(isCastle(newSquare, oldSquare)) { //for castling

    var num=oldSquare.id
    var oldId = 0
    var newId = 0
    if(oldSquare.pieceColor && num+2 === newSquare.id) { //white castle short
      newId=62
      oldId=64
    } else if(oldSquare.pieceColor && num-2 === newSquare.id) {  //white castle long
      newId=60
      oldId=57
    } else if(!oldSquare.pieceColor && num+2 === newSquare.id) { //black castle short
      newId=6
      oldId=8
    } else { //black castle long
      newId=4
      oldId=1
    }
    var newRook = {
      id:newId
    }
    var oldRook = {
      id:oldId,
      squareColor:getSquare(oldId, squares).squareColor,
      piece: getSquare(oldId, squares).piece,
      pieceColor: getSquare(oldId, squares).pieceColor,
      icon: getSquare(oldId, squares).icon,
    }

    newSquares = squares.map((squareCheck) => {
      if (squareCheck.id === newSquare.id) { 
        //moves the piece to the new square
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldSquare.piece,
          pieceColor: oldSquare.pieceColor,
          icon: oldSquare.icon,
        }
      } else if  (squareCheck.id === oldSquare.id) {
        //resets the square the piece is moving from
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      } else if(squareCheck.id === oldRook.id) {
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: 0,
          pieceColor: '',
          icon: '',
        }
      } else if(squareCheck.id === newRook.id) {
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldRook.piece,
          pieceColor: oldRook.pieceColor,
          icon: oldRook.icon,
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
    })
  } else {//for normal moves
    newSquares=squares.map((squareCheck) => {
      if (squareCheck.id === newSquare.id) { 
        //moves the piece to the new square
        return {
          id:squareCheck.id,
          squareColor:squareCheck.squareColor,
          piece: oldSquare.piece,
          pieceColor: oldSquare.pieceColor,
          icon: oldSquare.icon,
        }
      } else if  (squareCheck.id === oldSquare.id) {
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
    })
  }

  return newSquares
}

function findMoves(square, squares, castling, enpassent) {
  var moves=[]

  switch(square.piece) {
    case 1: //pawn
      moves=pawnMove(square, squares, castling, enpassent)
      break;
    case 2: //bishop
      moves=bishopMove(square, squares, castling, enpassent)
      break;
    case 3: //knight
      moves=knightMove(square, squares, castling, enpassent)
      break;
    case 4: //rook
      moves=rookMove(square, squares, castling, enpassent)
      break;
    case 5: //queen
      let movesD=bishopMove(square, squares, castling, enpassent)
      let movesS=rookMove(square, squares, castling, enpassent)
      moves=movesD.concat(movesS)
      break;
    case 6: //king
      moves=kingMove(square, squares, castling, enpassent)
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

function kingMove(square, squares, castling, enpassent) {
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

  //checks if the piece color is correct, that castling that way is allowed, that it will not pass through check, that it will not pass through other pieces, that not curret=nt in check
  if(square.pieceColor && castling[0] && !isAttackedSafe(getSquare(59, squares), squares, castling, enpassent, true) && !isAttackedSafe(getSquare(60, squares), squares, castling, enpassent, true) && getSquare(60, squares).piece===0 && getSquare(59, squares).piece===0 && getSquare(58, squares).piece===0 && !inCheckSafe(squares, true, castling, enpassent)) {//white long
    moves.push(59)
  }
  if(square.pieceColor && castling[1] && !isAttackedSafe(getSquare(62, squares), squares, castling, enpassent, true) && !isAttackedSafe(getSquare(63, squares), squares, castling, enpassent, true) && getSquare(62, squares).piece===0 && getSquare(63, squares).piece===0 && !inCheckSafe(squares, true, castling, enpassent)) {//white short
    moves.push(63)
  }
  if(!square.pieceColor && castling[2] && !isAttackedSafe(getSquare(3, squares), squares, castling, enpassent, false) && !isAttackedSafe(getSquare(4, squares), squares, castling, enpassent, false) && getSquare(2, squares).piece===0 && getSquare(3, squares).piece===0 && getSquare(4, squares).piece===0 && !inCheckSafe(squares, false, castling, enpassent)) {//black long
    moves.push(3)
  }
  if(!square.pieceColor && castling[3] && !isAttackedSafe(getSquare(6, squares), squares, castling, enpassent, false) && !isAttackedSafe(getSquare(7, squares), squares, castling, enpassent, false) && getSquare(7, squares).piece===0 && getSquare(6, squares).piece===0 && !inCheckSafe(squares, false, castling, enpassent)) {//black short
    moves.push(7)
  }
  //makes you can make a move to put yourself in check
  moves = moves.filter(move => testMove(getSquare(move, squares), square, squares, castling, enpassent, square.pieceColor))

  return moves
}

//needs castling and whatnot
function rookMove(square, squares, castling, enpassent) {
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

  moves = moves.filter(move => testMove(getSquare(move, squares), square, squares, castling, enpassent, square.pieceColor))
  return moves
}

function knightMove(square,squares, castling, enpassent) {
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

  moves = moves.filter(move => testMove(getSquare(move, squares), square, squares, castling, enpassent, square.pieceColor))
  return moves
}

function bishopMove(square, squares, castling, enpassent) {
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

  moves = moves.filter(move => testMove(getSquare(move, squares), square, squares, castling, enpassent, square.pieceColor))
  return moves
}

function pawnMove(square, squares, castling, enpassent) {
  var moves = []
  var num=square.id
  var row=Math.ceil(square.id/8)

  if (square.pieceColor) { //white pawn
    if(getSquare(num-8, squares).piece===0) {
     moves.push(num-8)
    }
    if(row===7 && getSquare(num-16, squares).piece===0)  {
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
    if(getSquare(num+8, squares).piece===0) {
      moves.push(num+8)
     }
     if(row===2 && getSquare(num+16, squares).piece===0)  {
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

  moves = moves.filter(move => testMove(getSquare(move, squares), square, squares, castling, enpassent, square.pieceColor))
  return moves
}

function isOver(squares, turn, castling, enpassent) {
  var moves =[]

  for (const square of squares) {
    if (square.pieceColor === turn) {
      moves = moves.concat(findMoves(square, squares, castling, enpassent))
    }
  }
  return moves.length === 0
}

function inCheck(squares, turn, castling, enpassent) {
  for (const square of squares) {
    if (square.piece === 6 && square.pieceColor === turn) {
      return isAttacked(square, squares, castling, enpassent, turn)
    }
  }
}

function isAttacked(square, squares, castling, enpassent, turn) {
  var color = turn
  var oppColor= !turn

  for (const squareCheck of squares) { // loops through all squares on the board
    if (squareCheck.pieceColor === oppColor) { //checks if the current squares has a piece on the opposite team
      if (findMoves(squareCheck, squares, castling, enpassent).includes(square.id)) { //checks if the piece will attack square
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

//exact same as other inCheck and isAttacked but wont lead to checking castling moves because that creates a loop
function inCheckSafe(squares, turn, castling, enpassent) {
  for (const square of squares) {
    if (square.piece === 6 && square.pieceColor === turn) {
      return isAttackedSafe(square, squares, castling, enpassent, turn)
    }
  }
}

function isAttackedSafe(square, squares, castling, enpassent, turn) {
  var color = turn
  var oppColor= !turn

  for (const squareCheck of squares) { // loops through all squares on the board
    if (squareCheck.pieceColor === oppColor) { //checks if the current squares has a piece on the opposite team
      if (findMovesSafe(squareCheck, squares, castling, enpassent).includes(square.id)) { //checks if the piece will attack square
        return true
      }
    }
  }

  return false
}

function findMovesSafe(square, squares, castling, enpassent) {
  var moves=[]

  switch(square.piece) {
    case 1: //pawn
      moves=pawnMoveSafe(square, squares, castling, enpassent)
      break;
    case 2: //bishop
      moves=bishopMoveSafe(square, squares, castling, enpassent)
      break;
    case 3: //knight
      moves=knightMoveSafe(square, squares, castling, enpassent)
      break;
    case 4: //rook
      moves=rookMoveSafe(square, squares, castling, enpassent)
      break;
    case 5: //queen
      let movesD=bishopMoveSafe(square, squares, castling, enpassent)
      let movesS=rookMoveSafe(square, squares, castling, enpassent)
      moves=movesD.concat(movesS)
      break;
    case 6: //king
      moves=kingMoveSafe(square, squares, castling, enpassent)
      break;
  }

  return moves
}

function kingMoveSafe(square, squares, castling, enpassent) {
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


  //you dont need to check if king is safe because if king were to castle through a check were the taking of the king would result in a check against the other team, it wouldnt matter if you could giver a check because your king is gone
  return moves
}

function pawnMoveSafe(square, squares, castling, enpassent) {
  var moves = []
  var num=square.id
  var row=Math.ceil(square.id/8)

  if (square.pieceColor) { //white pawn
    if(getSquare(num-8, squares).piece===0) {
     moves.push(num-8)
    }
    if(row===7 && getSquare(num-16, squares).piece===0)  {
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
    if(getSquare(num+8, squares).piece===0) {
      moves.push(num+8)
     }
     if(row===2 && getSquare(num+16, squares).piece===0)  {
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

function rookMoveSafe(square, squares, castling, enpassent) {
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

function knightMoveSafe(square,squares, castling, enpassent) {
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

function bishopMoveSafe(square, squares, castling, enpassent) {
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

export default Game;
