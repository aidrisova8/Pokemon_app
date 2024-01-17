import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    fontSize:'25px',
    };

const Index = ({pokemon}) => {
    // console.log('line9',pokemon)
  return (
    <div style={myStyle}> 
    <h1>See All The Pokemon!</h1>
    <ul>
        {pokemon.map((item,i)=>(
          <li key={i}>
               <a href={`/pokemon/${i}`}>
            {item.name.charAt(0).toUpperCase()+item.name.substring(1)}
            </a>
            </li>  
        ))}
    </ul>
    </div>
  )
}

export default Index