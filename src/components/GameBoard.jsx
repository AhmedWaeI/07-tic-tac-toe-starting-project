import { useEffect, useState } from "react";

export default function GameBoard({ handleGameBoard, gameBoard }) {
 

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={col?true:false}
                  onClick={() => handleGameBoard(rowIndex, colIndex)}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
// const[gameBoard,setGameBoard] = useState(boradvalues);
// const checkWinner= ()=>
//     {

//             for(let i=0;i<3;i++)
//                 {
//                     if(gameBoard[i][0]===gameBoard[i][1] && gameBoard[i][1]===gameBoard[i][2])
//                     {
//                         return gameBoard[i][0];
//                     }
//                 }

//             for(let i=0;i<3;i++)
//                 {
//                     if(gameBoard[0][i]===gameBoard[1][i] && gameBoard[1][i]===gameBoard[2][i])
//                     {
//                         return gameBoard[0][i];
//                     }
//                 }

//         if(gameBoard[0][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][2])
//             {
//                 return gameBoard[0][0];
//             }
//             if(gameBoard[0][2]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][0])
//             {
//                 return gameBoard[0][2];
//             }
//        return false;
//     }
//     useEffect(()=>
//     {
//         changeActive();
//         console.log(gameBoard)
//         const winner=checkWinner();
//         if(winner)
//         {
//             setGameBoard(boradvalues);
//             console.log(winner);
//         }

//     },[gameBoard])
// const  handleGameBoard= (rowIndex,colIndex)=>
//     {

//         setGameBoard((prev)=>{
//             const newvalues=[...prev.map((col)=>[...col])];
//             newvalues[rowIndex][colIndex]=Active;
//             return newvalues;
//         });

//     }
