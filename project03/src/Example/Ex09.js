import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Q1. 영화데이터를 테이블형태로 렌더링
// 랭킹 - 영화제목 - 개봉일자
// React JSX 특징 <table>를 <thead><tbody>없이 사용불가
// <table>
//  <tbody>
//<tr>td*3</tr>
//  </tbody>
//</table>

// 1) month 배열로 버튼을 01~10월 까지 제작
// 2) 버튼을 눌렀을 때, 그 값을 getData매개변수 안에 넣어준다
//**힌트
// value={내가 원하는 값}
// e.target.value
// 3)
//    - 아무것도 안누른 화면 첫 렌더링 : 오늘 날짜의 데이터
//    - 버튼을 누르면 해당 월의 1일 데이터로 변경
const Ex09 = () => {
    const [data, setData] = useState([])
    let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

    const getData = (selectMonth) => {
        console.log('원하는 달',selectMonth)
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=2022${ selectMonth }01`

        axios
            .get(url)
            .then((res) => {
                // 나에게 필요한 정보
                // 영화 순위가 모여있는 배열 : data
                //rank 랭킹 / movieNm 영화이름 / openDt 개봉일자
                //data[0].rank data[0].movieNm[0] data[0].openDt
                setData(res.data.boxOfficeResult.dailyBoxOfficeList)
                console.log(res.data.boxOfficeResult.dailyBoxOfficeList)

            })
            .catch(() => { alert('error!') })
    }

    //초기값
    useEffect(() => {
        //현재 날짜=> 몇월인지
        let todayMonth= new Date().getMonth()+1
        getData(todayMonth)
    }, [])

    // 아래에서 지정한 value를 가져오기
    const btnCk = (e) => {
        getData(e.target.value)
    }
    return (
        <div>
            <h1>2022년 올해의 영화</h1>
            <p>매달 1일 순위를 보여드립니다!</p>
            {/* 버튼 생성 */}
            {month.map((item) => (
                <button onClick={btnCk} value={item} key={item}>{item}월</button>
            ))}

            <table>
                <tbody>
                    {/* 여기서부터 반복 시작! */}
                    {data.map((item, idx) => (
                        <tr key={idx + item.movieNm}>
                            <td>{item.rank}</td>
                            <td>{item.movieNm}</td>
                            <td>{item.openDt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ex09