// 함수형 컴포넌트 구조 : rafce (life-cycle을 대체할 수 있는 기능이 생겼다)
// 클래스형 컴포넌트 구조 : rcc

// LifeCycle 어플리케이션의 생애주기
// a -> b -> c -> d (숫자와 순서 구별하기 쉽도록)

import React, { Component } from 'react'

export default class Ex07 extends Component {

    // 1. Class Component 에서 state관리
    // a. constructor 최초 생성
    //      => state 관리, 변수 선언, 데이터 관리
    constructor(props){ // 생성자
        super(props) // 부모클래스를 생성
        console.log('a. constructor')
        this.state = {
            num : 0
        }
    }
    //2. 함수는 선언 없이 사용
    ck = ()=>{
        console.log('ck')
        this.setState({
            num : this.state.num +1
        })
    }
    // b. render 화면을 렌더링 할 때(렌더링을 하고 있는 상태 - 화면 레이아웃을 준다)
    //      => 화면을 구성하는 요소
  render() {
    console.log('b. render')
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.ck}>+1</button>
      </div>
    )
  }
  // c. componentDidMount 화면 마운트 됨
  // 위치 상관 없이 배치
  //  => API Call
  componentDidMount(){
    console.log('c. componentDidMount')
  }
  
  // d. componentDidUpdate 값이 변경되어 갱신이 일어난 직후 호출
  // 순서가 아닌, 값이 변화했는지 여부
  //  =>값이 바뀐다면 일어나야할 일(값이 바뀐다면 배경색을 붉은 색으로)
  componentDidUpdate(){
    console.log('update!')
  }
}
