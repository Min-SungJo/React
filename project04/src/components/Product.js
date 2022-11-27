import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const Product = () => {
    const navigate=useNavigate()
    
    const goToMain = ()=>{
        navigate('/')
    }

    // 1. useParams()
    // url의 파라미터 정보를 가져올 수 있다

    // a. <Route path=''/페이지 이름: 파라미터정보'>
    // b. 컴포넌트 =>
    //      let{파라미터정보} = useParams()

    // 한 가지 정보만 사용 가능
    // 예) 많은 상품의 상세 페이지
    let {num} =useParams()
    console.log('num:',num)
    
    // 2. useSearchParams()
    // url의 쿼리 값을 가져와서 사용
    // 여러 값을 사용 가능
    // 예) 검색기능, 필터링 기능 => 고유한 정보가 아닌 세부 정보

    const [query, setQuery] = useSearchParams()
    console.log('이 제품의 가격은', query.get('price'))
    console.log('이 제품의 종류는', query.get('type'))
  return (
    <div>Product
        <p>{num}번째 상품 페이지 입니다</p>
        <p>가격 : {query.get('price')}</p>
        <p>종류 : {query.get('type')}</p>
        <button onClick={goToMain}>메인으로 돌아가기</button>
    </div>
  )
}

export default Product