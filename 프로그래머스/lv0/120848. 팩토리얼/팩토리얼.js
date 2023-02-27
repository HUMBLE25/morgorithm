function solution(n) {
    // 수도코드
    //i!<=n을 만족하는 i를 찾아내어 반환해야한다.

    let num = 1;
    let pec = 1;
    while(true){
        console.log(num)
        
        num *= ++pec// pec에1을 더한값을 반환한것을 더해준다.
        if(num >n){
          pec--
            break
        }
        
    }
    console.log(pec)
    return pec
    //n이 10인경우 
    
}