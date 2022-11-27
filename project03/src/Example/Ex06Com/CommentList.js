import React from 'react'

const CommentList = ({com}) => {

  console.log('현재 댓글 상태',com)
  //키값이 겹칠 수 있으므로 겹치지 않게 키값을 설정하는 것이 필요하다
  const smallTxt ={
    color : 'gray',
    fontSize : '10px'
  }
  return (
    <div>
        {com.map((item,idx) =>
        (<p key={idx+item.text}>
          {item.text}
          <span style={smallTxt}> {item.time} </span>
        </p>))}
    </div>
  )
}

export default CommentList