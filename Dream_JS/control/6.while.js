// while(조건){} 조건이 맞으면 계속해서 코드블록 실행
// = 조건이 false가 될 때까지 {} 무한정 코드 반복 실행 
// -> 따로 초기화 하거나 증가하는 게 없음  -> 우리가 해야 함

let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive){
    console.log('아직 살아있다❤️‍🔥');
    if(i===1000){
        break;
    }
}