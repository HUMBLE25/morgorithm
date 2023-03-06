function solution(i, j, k) {
    //수도코드
    //정수의 범위를 입력받고 입력받은 k의 갯수를 반환해야한다.
    
    
    //정답을 반환할 변수를 선언하고 숫자를 반환해야하기에 0을 할당해준다.
    // let answer =0
    // //i와j사이에서 반복해준다. 
    // while(i<=j){    
    //       //문자열 매소드를 사용할것이므로 ''을 더해 문자열로 만들어준다.
    //       const num = i+''
    //       //입력받은 k를 찾는 정규표현식 인스턴스를 만들어준다.
    //       const regExp = new RegExp(k,'g')
    //       //match매소드를 활용하여 k를 포함한 배열을 만든다.
    //       const isValid =num.match(regExp)
    //         if(isValid){
    //             //그때의 배열의 길이가 K의 횟수이므로 이를 answer에 더해준다
    //             answer += isValid.length
    //         }
    //       i++
    // }
    // //answer를 반환한다.
    // return answer
    
    let a ='';
    //범위내의 수를 모두 더해준다.
    while( i <= j){
        a+=i
        i++
    }
    console.log(a.split(k))
    //k를 기준으로 split매소드를 사용한다. 그리고 길이에서 1을 빼준다.
    //이유는 k의 갯수보다 항상 1개더 많이 배열의 요소가 생기기 때문이다.
    return a.split(k).length-1;
}