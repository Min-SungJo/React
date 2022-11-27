import './App.css';
import Menu from './Components/Menu';
//import Menu2 from './Components/Menu2';

function App() {
    // rafce : 컴포넌트의 구조를 만드는 단축키

    // 컴포넌트 : 리액트로 만들어진 앱을 이루는 최소 단위
    //          반복되는 코드를 하나로 묶어 컴포넌트로 만든다
    //          내가 원하는 코드를 묶어 '태그화' 시킨다
    // ** 컴포넌트는 반드시, 대문자로 시작해야한다 => 기존의 HTML태그와 구분

    // 프로퍼티(프롭스) (props)
    // 상위 컴포넌트가 하위 컴포넌트에
    // 값을 전달할 때 사용

    // 상위 컴포넌트 : <컴포넌트이름 속성="값"/>
    //        단순 문자열? "값"
    //        변수 사용? {변수이름}

    // 하위 컴포넌트의 매개변수로 값(Object)을 전달 받는다
    //                매개변수.속성 으로 사용이 가능하다
      let blackTea = '블랙티'
    return (
    <div>

      <Menu name="민트초코" price="4500원"></Menu>
      <Menu name={blackTea} price="4300원"></Menu>
      <Menu name="아메리카노"></Menu>

    </div>
  );
}

export default App;
