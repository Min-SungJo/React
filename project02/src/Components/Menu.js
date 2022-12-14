import React from "react"

            // Case 1) 매개변수 props => props.name
            //const Menu = (props) => {
            
            // Case 2) 객체 안의 속성 => {name}
const Menu = ({name, price}) => {
    
    return (
        <div>
            <h1>{name}</h1>
            {/* { 값이 들어있지 않은 경우?
            값 O => true
            값 X => false
            => 삼항연산자 이용 (이를 통해 default값을 설정할 수 있다)
            } */}
            {price ? <p>{price}</p> : <p>3500원</p>}
            
        </div>
    )
}

export default Menu