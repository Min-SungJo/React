import './App.css';
import {Routes, Route} from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';
import MyPage from './components/MyPage';
import Product from './components/Product';
function App() {

  return (
    <div>
      {/* header */}
      <h1>Welcome to React Router!</h1>
      {/* Routes : 여러 Route 를 감싸고
                   그 중 요청된 라우트 하나만 렌더링 해준다
          Q. Switch : Routes의 예전 방식
        Tip. 프론트엔드는 발전속도가 빠르므로 책보다는
             최신 자료를 찾아서 공부하는 것이 좋다
      */}
      <Routes>
        {/* Route 필수 속성 2가지 :
            path(경로), element(컴포넌트-렌더링 예정) */}
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>

        {/* 로그인 상태에 따라 다르게 처리 */}
        <Route path='/mypage' element={<MyPage/>}></Route>

        {/* url 파라미터를 이용 useParams() */}
        <Route path='/product:num' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
