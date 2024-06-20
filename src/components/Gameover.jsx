export default function Gameover({winner,handleRematch})
{
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner?<p>{winner} won the game</p>:<p>It's a Draw</p>}
            <p><button onClick={handleRematch}>Rematch</button></p>
            <p>Do you want to play again?</p>
        </div>
    )
}