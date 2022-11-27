import React from 'react'

// 데이터가 들어있는 json파일
// sell.list.map()
import sell from '../json/sell.json'
import Product from './Product'

// flex-wrap : wrap;
// => 크기가 넘어가는 데이터들은 다음 줄로넘겨줌

const Products = () => {
  console.log(sell.list)
  

  return (
    <div>
      {sell.list.map((item,idx)=>(
        <Product key={idx+item.title} item={item} idx={idx}/>
      ))}
    </div>
  )
}

export default Products