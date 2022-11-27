import React from 'react'
import PhotoCard from './Ex05Com/PhotoCard'
import './Ex05.css'

const Ex05 = () => {

    // 조건1) Exo05Com 폴더 => PhotoCard.js 컴포넌트 사용
    // 조건2) member라는 배열안에 name과 url 주소가 포함된
    //        객체들을 생성할 것
    // 조건3) 만약 배열에 값을 추가하면 바로 새로운 카드들이
    //        생기게 할 것

    let member = [
        {name: "마들렌" , url:"https://i.pinimg.com/originals/1f/80/54/1f8054882f99fae25ccd88eadc032f8f.jpg"}
        ,{name: "에그타르트" , url:"https://i.pinimg.com/736x/76/4f/af/764faf30f27a0f1891297e882c3123a2.jpg"}
        ,{name: "휘낭시에" , url:"https://i.pinimg.com/736x/64/81/69/648169f215a1160bb8731a2e6974ba4e.jpg"}]
    let newMember = member.map(item=>(<PhotoCard key={item.menu} item={item}></PhotoCard>))

    let container={
        display :'flex',
        flexDirection : 'row'
    }
  return (
    <div style={container}>

            {/* {newMember} */}
            {member.map(item=>(<PhotoCard key={item.menu} item={item}></PhotoCard>))}
            
    </div>
  )
}

export default Ex05