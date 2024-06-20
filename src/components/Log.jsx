export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns? 
        turns.map((turn, index) => (
          <li key={index}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        )):<li>Nothing to be displayed yet</li>}
    </ol>
  );
}
