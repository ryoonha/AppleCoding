let num = 3;

// num의 숫자가 짝수이면 👍 홀수라면 👎 이 출력되도록 
// if

if(num %2 === 0){
    console.log('👍');
} else {
    console.log('👎');
}

// ternary

let quiz = num %2 === 0 ? '👍' : '👎';
console.log(quiz);