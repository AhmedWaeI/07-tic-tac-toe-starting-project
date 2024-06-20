import { useState } from "react";
export default function Player({name,symbol,Active,handlePlayerChange}) {
    const[edit,setEdit] = useState(false);
    const[playername,setPlayername] = useState(name);
    const handleChange=(e)=>
        {
            setPlayername(e.target.value);
           
        }
  return (
    <li className={Active?"active":""}>
    <span className="player">
      {edit?<input onChange={handleChange} value={playername}type="text"/>:<span className="player-name">{playername}</span>}
      <span className="player-symbol">{symbol}</span>
    </span>
    {edit?<button onClick={()=>{setEdit(false);handlePlayerChange(symbol,playername)}}>Save</button>:<button onClick={()=>setEdit(true)}>Edit</button>}
    
  </li>
  );
}

