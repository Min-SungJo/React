import React from 'react'
const NewsItem = ({item}) => {
    const boxStyle={
        display : 'flex',
        border : '1px solid'
    }
    return (
        <div style={boxStyle}>
            <div>
                <img src={item.urlToImage} width='200px'></img>
            </div>
            <div>
                <a href={item.url}>
                    <h2>{item.title}</h2>
                </a>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default NewsItem