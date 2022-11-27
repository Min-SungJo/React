import React from 'react'
// import './AppExample.css';
import MemberA from './Components/MemberA'

const AppExampleA = () => {

    // 팀원을 소개하는 페이지를만들어보자!
    // 단, component와 props를 이용해서 만들 것

    // 조건
    // 1)Member.js 라는 컴포넌트를 이용
    //2) 스타일은 객체 형태로 삽입할 것
    let team='르세라핌';
  return (
    <div>
        <MemberA teamName ={team} memberName="사쿠라"/>
        {/* <MemberA leader ={leader} memberName="사쿠라"/> */}
        <MemberA teamName ={team} memberName="김채원"/>
        <MemberA teamName ={team} memberName="카즈하"/>
        <MemberA teamName ={team} memberName="허윤진"/>
        <MemberA teamName ={team} memberName="홍은채"/>
    </div>
  )
}

export default AppExampleA