import React from 'react'

import { useNavigate } from 'react-router-dom'

const MyPage = () => {

    const navigate=useNavigate()
    
    
    const goToMain = ()=>{
        navigate('/')
    }
  return (
    <div>유저정보입니다
        <br/>
        <button onClick={goToMain}>메인으로 돌아가기</button>
    </div>
  )
}

export default MyPage