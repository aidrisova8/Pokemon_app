import React from 'react'
const myStyle1 = {
    color: '#ffffff',
    backgroundColor: '#000000',

    };
 const Show = ({pokemon}) => {
    // console.log(pokemon)
  return (
    <div style={myStyle1}> 
    <h1>Gotta Catch 'Em All</h1>
    <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.substring(1)}</h2>
    <img src={`${pokemon.img}.jpg`} alt="" />
    <br /><br />
    <a href={`/pokemon`} style={{ ...myStyle1, fontSize:'25px' }}> Back </a>
    </div>
  )
}

export default Show;
