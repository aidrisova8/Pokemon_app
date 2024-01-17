import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

const Index = ({pokemon}) => {
    console.log('line9',pokemon)
  return (
    <div style={myStyle}> 
    <h1>See All The Pokemon!</h1>
    <ul>
        {pokemon.map((item,i)=>(
          <li key={i}>{item.name.charAt(0).toUpperCase()+item.name.substring(1)}</li>  
        ))}
    </ul>
    </div>
  )
}

export default Index