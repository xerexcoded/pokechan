
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [poke,setpoke] =useState("");
  const [chosen,setChosen] =useState(false);
  const [chan,setChan]= useState({
         name:"",
         species:"",
         img:"",
         hp:"",
         attack:"",
         defense:"",
         type:"", 
  });
  const searchpoke=()=>{
     axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`).then((response)=> {
       setChan({
         name:poke,
         img:response.data.sprites.other.dream_world.front_default ,
         hp:response.data.stats[0].base_stat,attack:response.data.stats,
         attack:response.data.stats[1].base_stat,
         defense:response.data.stats[2].base_stat,
         type:response.data.types[0].type.name, 
        })
        setChosen(true);
      })
  }
  return (

    
    <div className="App">
      <div className="title">
      <h1>POKECHAN </h1>
      <input type="text" onChange={(e) => {setpoke(e.target.value);}}></input>
      <button onClick={searchpoke }>SEARCH </button>
      </div>
      <div className="displaychan">
         {
           !chosen ? (<h2>SELECT pokemon</h2>) : (
          <>
           <h2>{chan.name}</h2>
           <img src={chan.img} />
           <h3>Type:{chan.type}</h3>
           <h3>HP:{chan.hp}</h3>
           <h3>attack:{chan.attack}</h3>
           <h3>defense:{chan.defense}</h3>
          </> 
           
           )
         } 
      </div>
      <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/xerexcoded" target="__blank">
          Arnav Banerjee
        </a>
      </span>

    </div>
    </div>
  );
}

export default App;
