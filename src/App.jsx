import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useEffect, useState } from "react";
import Gameover from "./components/Gameover";
const boradvalues = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActive(turns) {
  let currplayer = "X";
  if (turns.length > 0) {
    currplayer = turns[0].player === "X" ? "O" : "X";
  }
  return currplayer;
}
const checkWinner= (gameBoard)=>
  {

          for(let i=0;i<3;i++)
              {
                  if(gameBoard[i][0]===gameBoard[i][1] && gameBoard[i][1]===gameBoard[i][2])
                  {
                      return gameBoard[i][0];
                  }
              }

          for(let i=0;i<3;i++)
              {
                  if(gameBoard[0][i]===gameBoard[1][i] && gameBoard[1][i]===gameBoard[2][i])
                  {
                      return gameBoard[0][i];
                  }
              }

      if(gameBoard[0][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][2])
          {
              return gameBoard[0][0];
          }
          if(gameBoard[0][2]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][0])
          {
              return gameBoard[0][2];
          }
     return false;
  }
const checkDraw=(turns)=>
{
  return turns.length===9
}
let winner
function App() {
  const [turns, Updateturns] = useState([]);
  const [playernames,setPlayernames]=useState(
    {
      "X":"Player1",
      "O":"Player2"
    }
  )
  let currentPlayer=deriveActive(turns);
  let gameBoard = [...boradvalues.map((row)=>[...row])];
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
    console.log(turns);
    let winner=checkWinner(gameBoard)
    if(!winner && turns.length===9)
    {
      winner="Draw"
    }
 
  const handleUpdate = (row, col) => {
    Updateturns((prev) => {
      let currplayer = deriveActive(prev);
      const newTurns = [{ square: { row, col }, player: currplayer }, ...prev];

      return newTurns;
    });
    
    
  };
  const handleRematch=()=>
    {
      Updateturns([])
      winner=null
    }
    const handlePlayerChange=(symbol,name)=>
    {
      setPlayernames(
        (prev)=>({...prev,[symbol]:name})
      )
    }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player handlePlayerChange={handlePlayerChange} Active={currentPlayer === "X"} name="player1" symbol="X" />
          <Player handlePlayerChange={handlePlayerChange} Active={currentPlayer === "O"} name="player2" symbol="O" />
        </ol>
        {winner && <Gameover winner={playernames[winner]} handleRematch={handleRematch} />}
        <GameBoard
          handleGameBoard={handleUpdate}
          gameBoard={gameBoard}
        />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
