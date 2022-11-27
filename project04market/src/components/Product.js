import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({item,idx}) => {
    
    console.log(item)
    const containerStyle={
        border : '1px solid gray',
        display: 'flex',
        flexDirection : 'column'
    }
    const linkStyleP ={
        textDecoration : 'none',
        color : 'black'
    }

    

  return (
    <div style={containerStyle}>
        <img src={item.photo} width="100px"></img>
        <h2>
            <Link to={'/detail'+(idx+1)+'?title='+item.title+'&price='+item.price+'&place='+item.place}
            style={linkStyleP}>
                {item.title}
            </Link>
        </h2>
        <p>{item.price}</p>
        <p>{item.place}</p>
          
    </div>
  )
}

export default Product