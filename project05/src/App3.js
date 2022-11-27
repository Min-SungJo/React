import axios from 'axios'
import React, { useRef } from 'react'

const App3 = () => {
    const idRef = useRef()
    const checkBoxRef1 = useRef()
    const checkBoxRef2 = useRef()
    const checkBoxRef3 = useRef()
    const selectRef = useRef()

    const handleSubmit=(event)=>{
        event.preventDefault()
        // form  태그가 다른 페이지로 정보를 이동시키지 못하도록 막아주는것

        //(1) input text => useRef
        console.log('제출완료', idRef.current.value)
        
        
        //(2) input checkbox, radio => useRef
        console.log(checkBoxRef1.current.checked)
        console.log(checkBoxRef2.current.checked)
        console.log(checkBoxRef3.current.checked)
        //checkbox, radio 같은 경우,
        //값을 받아오고 싶으면 .value
        //체크 여부를 알고 싶으면 .checked


        //(3) select 태그 => useRef
        console.log(selectRef.current.value)

        // axios.post('http://localhost:8889/smart/members/login',{})
        //     .then(()=>{

        //         navigator('/')
        //     })
        //     .catch(()=>{})
    }
  return (
    <div>
        <form on onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>질문</td>
                    <td>답변</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td><input type='text' name='userName' ref={idRef}></input></td>
                </tr>
                <tr>
                    <td>희망 근무지</td>
                    <td>
                        광주<input type='checkbox' name='position' value='gj' ref={checkBoxRef1}></input>
                        서울<input type='checkbox' name='position' value='sl' ref={checkBoxRef2}></input>
                        판교<input type='checkbox' name='position' value='pg' ref={checkBoxRef3}></input>
                    </td>
                </tr>
                <tr>
                    <td>공휴일</td>
                    <td>
                        <select ref={selectRef}>
                            <option value='hw'>할로윈</option>
                            <option value='xmas'>크리스마스</option>
                            <option value='ny'>새해</option>
                        </select>
                    </td>

                </tr>
                <tr>
                    <td>제출</td>
                    <td><input type='submit'></input></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default App3