function AppExample(){
    //1. 사용자에게 이름을 입력받아준다
    // prompt('이름을 말해주세요')
    let name =  prompt("이름을 말해주세요");
    
    //2. 현재 날짜를 가지고 올 것
    // 현재 몇월? getMonth()
    let today = new Date();
    let date =today.toLocaleDateString();
    // let year = today.getFullYear();
    let month = today.getMonth()+1;
    // let date = today.getDate();
    
    //3.
    // 조건1 3~5 봄
    // 조건2 6~8 여름
    // 조건2 9~11 가을
    // 조건2 12~2 겨울
    let season="";

    //switch case문
    // switch (month){
    //     case 3||4||5:
    //         season="봄";
    //     break;

    //     case 6||7||8:
    //         season="여름";
    //         break;

    //     case 9||10||11:
    //         season="가을";
    //         break;
            
    //     case 1||2||12:
    //         season="겨울";
    //         break;
            
    //     default:
    //         break;
    // }
    
    //if문
    if(3<=month&&month<=5){
        season="봄";
    }else if(6<=month&&month<=8){
        season="여름";
    }else if(9<=month&&month<=11){
        season="가을";
    }else if(1<=month&&month<=12){
        season="겨울";
    }
    return(


        // 결과창
        // 2022.9.27
        // <hr></hr>
        // 000님 지금은 가을입니다. 좋은 하루 보내세요
        <>
            <h1>{date}</h1>
            <hr/>
            <h4>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</h4>
        </>

    );
}

export default AppExample;