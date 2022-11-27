import React, { useState } from 'react'

const AddComment = ({handleComment}) => {

  const [value,setValue] = useState('')
  //아래 입력한 inputHandle을 사용하기 위한 useState
  // 1. input 내 변화 값 감지
  const inputHandle = (e) => {
    setValue(e.target.value)
  }
  // 2. '+'버튼을 클릭 시, input 값을 어딘가에 세팅
  const btnHandle = ()=>{
    console.log('현재댓글', value)
    // 3. 세팅된 그 값을 상위 컴포넌트로 전송
    //handleComment에 value을 넣어서 보내기
    handleComment(value)
    // 4. input 창을 비워줄 것
    setValue('')
  }

  const enterHandle = (e)=>{
    // console.log(e.code)
    e.code ==='Enter'&&btnHandle()
  }
  return (
    <div>
      <input
      onChange={inputHandle}
      value={value}
      onKeyPress={enterHandle}
      >

      </input>
      {/* setValue로 비워줄 수 있도록 value로 명명한다*/}
      <button onClick={btnHandle}>+</button>
    </div>
  )
}

export default AddComment