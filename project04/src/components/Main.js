import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Main = () => {
    const navigate=useNavigate()
    const [userState,setUserState]=useState(false)
    const goToMyPage=()=>{
      // login 상태면 mypage로 이동,
      // 그렇지 않으면 about으로 이동
      userState==true
               ?navigate('/mypage')
               :navigate('/about')
    }
  return (
    <div>Main
        <br/>
        {/* Link Component
        - 브라우저 주소를 바꿔주는 역할
        - 실제 페이지를 부르지 않음(a태그와의 차이)
        - 메모리 효율이 좋다, 상대적으로 속도가 빠름*/}
        <Link to='./about'>About으로 이동</Link>
        <br/>
        <Link to='./product0'>상품페이지로 이동</Link>
        <br/>
        {/* <Link to='./mypage'>마이페이지로 이동</Link> */}
        <button onClick={goToMyPage}>마이페이지로 이동</button>
    </div>
  )
}

export default Main