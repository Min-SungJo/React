import React from 'react'
import { useState } from 'react'
const Ex01 = () => {
    const [num2, setNum2] = useState(0);
    // const ck =(e)=>{
    //   console.log(e.target.innerText);}
    //React Event
    //1. onclick : camelCase로 작성
    //2. {함수이름} : " "대신 JSX 문법인 {} 사용
    //3.이벤트 안에 함수 형태의 값을 전달
    //    ex) {함수이름} => 가능
    //        {( )=>{}} => 가능
    //4. DOM 요소에만 이벤트를 설정 할 수 있다
    //    =>내가 만든 컴포넌트에는 이벤트 설정 불가능
    let num = 0;
    //변수로 처리할 때 => console 창은 되지만 화면 랜더링 되지 않음
    const increase = (e) => {
        console.log('숫자 1씩 증가');
        num = num + 1
        console.log(num)
        //useState로 처리할 때
        setNum2(num2 + 1)
    }
    return (
        <div>
            <p>{num2}</p>
            <button onClick={increase}>+1</button>
            {/* <button onClick={ck}>클릭!</button> */}
        </div>
    )
}
export default Ex01