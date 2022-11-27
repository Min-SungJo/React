import React from 'react'

import { useNavigate } from 'react-router-dom'

const About = () => {
    
    const navigate = useNavigate()
    // useNavigate : 페이지 이동을 도와주는 React hooks
    // 눌렀을 때, 로그인 창으로 이동, 메인으로 이동
    const goToMain = ()=>{
        navigate('/')
    }
  return (
    <div>About
        <br/>
        <button onClick={goToMain}>Main으로 이동</button>
    </div>
  )
}

export default About