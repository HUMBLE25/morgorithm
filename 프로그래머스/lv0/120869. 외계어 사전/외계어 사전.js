function solution(spell, dic) {
    
    // //조건 만족여부를 담는 변수를 선언하고 false를 할당한다.
    // let isValid = false        
    // for(let el of dic){
    //     //spell의 요소를 가진 갯수를 확인하는 변수를 선언하고 0을 할당한다.
    //     let check = 0;
    //     for(let it of spell){
    //         // dic의 요소에 spell의 요소가 포함될때 마다 check에 1씩 더해준다.
    //      if(el.includes(it)){
    //         check++;
    //         }
    //     }
    //     //check와 spell의 길이가 같다면 조건에 부합하는것 이므로 true를 할당해준다.
    //     if(check===spell.length){
    //         isValid = true;
    //     }
    // }
    // // 삼항연산자를 이용하여 true일 경우 1을 false일 경우 2를 반환한다.
    // return isValid ? 1 : 2
    
    // 적어도 하나가 참일 경우 true를 반환하는 some매서드를 사용한다.
    return dic.some((el)=>{
                return spell.sort().join('') === [...el].sort().join('')
            }) ? 1 : 2;
    
                    
}