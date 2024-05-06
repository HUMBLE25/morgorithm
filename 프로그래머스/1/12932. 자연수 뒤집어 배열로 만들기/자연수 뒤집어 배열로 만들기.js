function solution(n) {
    //수도코드
    //뒤집어 주는 메서드 이용한다.
    //숫자형으로 바꿔야한다.
    //map이용가능할거 같다.
    // console.log(n)
    // const num =String(n).split("")
    // Number(num)  
    //   console.log(num.sort((a,b)=>{return a>b?-1:1}))
    // return num.sort((a,b)=>{return a>b?-1:1})
    
//     n= String(n)
//     const answer=[];
//     for(let i =n.length -1; i>=0;  i--){
      
//         answer.push(Number(n[i]))
//     }
    
//     return answer
    
    //other
    // const answer =String(n).split("").reverse()
    //                 .map((num)=>{return Number(num)})
    // console.log(answer)
    // return answer
    
    //데이터 타입 변환을 알아야 한다.
    // 숫자형은 반복할수 없다. 반복할 수 있는 형태로 변환해야한다.
    // js의 형변환 특징을 이용하여 문제를 푼다.
    // + 연산은 피연산자의 타입을 고려하여 더한다.
    // 한쪽이 문자열이라면 모두 문자열로 변환후 덧셈을 진행한다.
    // 둘다 숫자라면 숫자끼리 덧셈한다.
    // 한쪽의 타입을 알수없다면 나머지를 숫자타입으로 변환한다.
    return [...n+""].reverse().map(el=>+el)

  
}