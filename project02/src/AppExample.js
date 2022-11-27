import React from 'react'
import './AppExample.css';
import Member from './Components/Member'

const AppExample = () => {

    // 팀원을 소개하는 페이지를만들어보자!
    // 단, component와 props를 이용해서 만들 것

    // 조건
    // 1)Member.js 라는 컴포넌트를 이용
    //2) 스타일은 객체 형태로 삽입할 것
  return (
    <div>
        {/* <Menu name="민트초코" price="4500원"></Menu> */}
        <Member teamName ="스마트민성조" name="민성조"></Member>
        <Member teamName ="스마트민성조" name="김누리"></Member>
        <Member teamName ="스마트민성조" name="김정우"></Member>
        <Member teamName ="스마트민성조" name="문재승"></Member>

    </div>
  )
}

export default AppExample