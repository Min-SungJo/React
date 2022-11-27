import React from 'react'

const PhotoCard = (props) => {

    let boxStyle={
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContents : 'center',
        border : '1px solid black'
    }
    
    return (
        <div style={boxStyle}>
                {props.item.name}
            <img src={props.item.url}></img>
        </div>
    )
}

export default PhotoCard