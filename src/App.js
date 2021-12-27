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
            pieceColor: true,
            icon: '',
        },
        {
            id:18,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:19,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:20,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:21,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:22,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:23,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:24,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:25,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:26,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:27,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:28,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:29,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:30,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:31,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:32,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:33,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:34,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:35,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:36,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:37,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:38,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:39,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:40,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:41,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:42,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:43,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:44,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:45,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:46,
            squareColor:false,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:47,
            squareColor:true,
            piece: 0,
            pieceColor: true,
            icon: '',
        },
        {
            id:48,
            squareColor:false,
            piece: 0,
            pieceColor: true,
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
      moves:[47],
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
    }
  }

  selecting(square) {
    this.state.selectedPiece[0] ? this.checkMove(square) : this.pickPiece(square)
  }

  makeMove(square) {
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
            pieceColor: true,
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
          pieceColor: true,
          icon: '',
        }
      ],
      moves:[],
      turn:!this.state.turn
    })
  }

  unselectMaybe(square) {
    (square.piece && square.pieceColor===this.state.turn) ?
      this.setState({ //if selecting new piece
        moves:findMoves(square, this.state.squares),
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
            pieceColor: true,
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
          pieceColor: true,
          icon: '',
        }
      ]}) 
  }

  select(square) {
    this.setState({
      moves:findMoves(square, this.state.squares),
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

function findMoves(square, squares) {
  var moves=[47]



  return moves
}

// function App() {

//   // Id: 1 is bottom left
//   //    8 is bottom right
//   //    64 is rop right
//   // Colors: white = true
//   //         black = false
//   // Piece: 0=no piece
//   //        1=pawn
//   //        2=bishop
//   //        3=knight
//   //        4=rook
//   //        5=queen 
//   //        6=king
//   const [squares, setsquares] = useState([
//     {
//         id:1,
//         squareColor:true,
//         piece: 4,
//         pieceColor: true,
//         icon: <img src={brook} className="piece-img" alt="brook"/>,
//     },
//     {
//         id:2,
//         squareColor:false,
//         piece: 3,
//         pieceColor: true,
//         icon: <img src={bknight} className="piece-img" alt="bknight"/>,
//     },
//     {
//         id:3,
//         squareColor:true,
//         piece: 2,
//         pieceColor: true,
//         icon: <img src={bbishop} className="piece-img" alt="bbishop"/>,
//     },
//     {
//         id:4,
//         squareColor:false,
//         piece: 5,
//         pieceColor: true,
//         icon: <img src={bqueen} className="piece-img" alt="bqueen"/>,
//     },
//     {
//         id:5,
//         squareColor:true,
//         piece: 6,
//         pieceColor: true,
//         icon: <img src={bking} className="piece-img" alt="bking"/>,
//     },
//     {
//         id:6,
//         squareColor:false,
//         piece: 2,
//         pieceColor: true,
//         icon: <img src={bbishop} className="piece-img" alt="bbishop"/>,
//     },
//     {
//         id:7,
//         squareColor:true,
//         piece: 3,
//         pieceColor: true,
//         icon: <img src={bknight} className="piece-img" alt="bknight"/>,
//     },
//     {
//         id:8,
//         squareColor:false,
//         piece: 4,
//         pieceColor: true,
//         icon: <img src={brook} className="piece-img" alt="brook"/>,
//     },
//     {
//         id:9,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:10,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:11,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:12,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:13,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:14,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:15,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:16,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={bpawn} className="piece-img" alt="bpawn"/>,
//     },
//     {
//         id:17,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:18,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:19,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:20,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:21,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:22,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:23,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:24,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:25,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:26,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:27,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:28,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:29,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:30,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:31,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:32,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:33,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:34,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:35,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:36,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:37,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:38,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:39,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:40,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:41,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:42,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:43,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:44,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:45,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:46,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:47,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:48,
//         squareColor:false,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//     },
//     {
//         id:49,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:50,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:51,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:52,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:53,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:54,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:55,
//         squareColor:true,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:56,
//         squareColor:false,
//         piece: 1,
//         pieceColor: true,
//         icon: <img src={wpawn} className="piece-img" alt="wpawn"/>,
//     },
//     {
//         id:57,
//         squareColor:true,
//         piece: 4,
//         pieceColor: true,
//         icon: <img src={wrook} className="piece-img" alt="wrook"/>,
//     },
//     {
//         id:58,
//         squareColor:false,
//         piece: 3,
//         pieceColor: true,
//         icon: <img src={wknight} className="piece-img" alt="wknight"/>,
//     },
//     {
//         id:59,
//         squareColor:true,
//         piece: 2,
//         pieceColor: true,
//         icon: <img src={wbishop} className="piece-img" alt="wbishop"/>,
//     },
//     {
//         id:60,
//         squareColor:false,
//         piece: 5,
//         pieceColor: true,
//         icon: <img src={wqueen} className="piece-img" alt="wqueen"/>,
//     },
//     {
//         id:61,
//         squareColor:true,
//         piece: 6,
//         pieceColor: true,
//         icon: <img src={wking} className="piece-img" alt="wking"/>,
//     },
//     {
//         id:62,
//         squareColor:false,
//         piece: 2,
//         pieceColor: true,
//         icon: <img src={wbishop} className="piece-img" alt="wbishop"/>,
//     },
//     {
//         id:63,
//         squareColor:true,
//         piece: 3,
//         pieceColor: true,
//         icon: <img src={wknight} className="piece-img" alt="wknight"/>,
//     },
//     {
//         id:64,
//         squareColor:false,
//         piece: 4,
//         pieceColor: true,
//         icon: <img src={wrook} className="piece-img" alt="wrook"/>,
//     },
//   ])

//   const [moves, setMoves] = useState([])

//   const [selectedPiece, setSelectedPiece] = useState(
//     [
//       false, 
//       {
//         id:0,
//         squareColor:true,
//         piece: 0,
//         pieceColor: true,
//         icon: '',
//       },
//     ]
//   )

//   // const findMoves = (square) => (

//   //   selectedPiece[0] ? { //when a piece is already selected

//   //     if /*(selectedPiece[1].id === square.id)*/ (moves.includes(square.id)) { //if you clicked on a piece to move to that is legal
//   //       setsquares(
//   //         squares.map((squareCheck) => 
//   //           (
//   //             squareCheck.id === square.id ? 
//   //               { //moves the piece to the new square
//   //                 id:squareCheck.id,
//   //                 squareColor:squareCheck.squareColor,
//   //                 piece: selectedPiece[1].piece,
//   //                 pieceColor: selectedPiece[1].pieceColor,
//   //                 icon: selectedPiece[1].icon,
//   //               } : 
//   //               squareCheck.id === selectedPiece[1].id ?
//   //                 { //resets the square the piece is moving from
//   //                   id:squareCheck.id,
//   //                   squareColor:squareCheck.squareColor,
//   //                   piece: 0,
//   //                   pieceColor: true,
//   //                   icon: '',
//   //                 } : 
//   //                 squareCheck
//   //           )
//   //         )
//   //       )
//   //     }

//   //     setSelectedPiece([ //resets selected piece
//   //       false, 
//   //       {
//   //         id:1,
//   //         squareColor:true,
//   //         piece: 0,
//   //         pieceColor: true,
//   //         icon: '',
//   //       },
//   //     ])

//   //   } : { //when you are selecting a piece
//   //     setSelectedPiece([
//   //       true, 
//   //       {
//   //         id:square.id,
//   //         squareColor:square.squareColor,
//   //         piece: square.piece,
//   //         pieceColor: square.pieceColor,
//   //         icon: square.icon,
//   //       },
//   //     ])
//   //   }
//   // )

//   const selecting = (square) => (
//     selectedPiece[0] ? checkMove(square) : pickPiece(square)
//   )

//   checkMove(square) {
//     moves.includes(square.id) ?
//       setSelectedPiece([false, {id:square.id, //when the move made is legal
//         squareColor:square.squareColor,
//         piece: square.piece,
//         pieceColor: square.pieceColor,
//         icon: square.icon,}]) :
//         setSelectedPiece([false, {id:square.id, //when move made is illegal
//           squareColor:square.squareColor,
//           piece: square.piece,
//           pieceColor: square.pieceColor,
//           icon: square.icon,}])
//   }

//   const pickPiece = (square) => (
//     square.piece ? 
//       setSelectedPiece([true, {id:square.id, //when clicked on a piece
//         squareColor:square.squareColor,
//         piece: square.piece,
//         pieceColor: square.pieceColor,
//         icon: square.icon,}]) :
//         setSelectedPiece([false, {id:0, //when clicked on an empty square
//           squareColor:true,
//           piece: 0,
//           pieceColor: true,
//           icon: '',}])
//   )

//   return (
//     <div className='App'>
//       <div className="game">
//         <Board 
//           squares={squares}
//           onSelect={selecting}
//           moves={moves}
//           selectedNum={selectedPiece[1].id}
//         />
//       </div>
//     </div>
//   );
// }

function bishopMove(square, squares) {
  var moves = []

  let num = square
  do {
    if (num%8===0) {
      num+=15
    }
    else {
      num+=7
    }
    moves.push(num)
  } while (num >= 1 && num <= 64 && !squares[num].id)

  num = square
  do {
    if (num%8===0) {
      num+=1
    }
    else {
      num+=9
    }
    moves.push(num)
  } while (num >= 1 && num <= 64 && !squares[num].id) 

  num = square
  do {
    if (num%8===0) {
      num-=15
    }
    else {
      num-=7
    }
    moves.push(num)
  } while (num >= 1 && num <= 64 && !squares[num].id)

  num = square
  do {
    if (num%8===0) {
      num-=1
    }
    else {
      num-=9
    }
    moves.push(num)
  } while (num >= 1 && num <= 64 && !squares[num].id)

  return moves
}

function rookMove(square, squares) {
  var moves = []

  let num = square%8
  for (var i=1; i<=8; i++) {
    var _new = num+i
    moves.push(_new)
  }

  num=square
  while (num >= 1 && num <= 64 && !squares[num].id) {
    num+=8
    moves.push(num)
  }
  
  num=square
  while (num >= 1 && num <= 64 && !squares[num].id) {
    num-=8
    moves.push(num)
  }

  return moves
}


export default App;
