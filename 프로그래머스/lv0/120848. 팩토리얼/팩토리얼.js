function solution(n) {
    // 수도코드
    //i!<=n을 만족하는 i를 찾아내어 반환해야한다.

    // let num = 1; // 팩토리얼의 값이 되는 변수, 1을 할당하고 시작한다.
    // let pec = 1; // 1씩증가하며 팩토리얼에 곱해줄 변수, 1을할당하고 시작한다.
    // //while문을 사용하여 반복하였다. true를 이용해 계속반복하게 만든다.
    // while(true){
    //     //num에 1씩증가하는 pec을 곱하기할당(Multiplication assignment)을 해준다.
    //     num *= ++pec
    //     //팩토리얼 값이 입려받은 n보다 커질경우 pec에 1을빼고 반환해준다.
    //     //break를 이용하여 반복을 멈춘다.
    //     if(num >n){
    //         pec--;
    //         break
    //     }
    // }
    // return pec
    
    //위와 같은 로직이다.
     // let num = 1; 
     // let pec = 1;
     // while(num <= n){
     //    num *= ++pec
     //    if(num >n){
     //        pec--;
     //        break
     //    }
     // }
     // return pec
    
    // // 1씩증가하며 팩토리얼에 곱해줄 변수, 1을할당하고 시작한다.
    // let pec =1; 
    // // 위의로직과 동일하다, num에 1을 할당하고시작하고, 곱하기할당연산자와,Increment(++)를 이용하여 팩토리얼 연산을 한다.
    // for(let num = 1; num <= n; num *= ++pec){}
    // //pec에 1을 빼고 반환한다.
    // return --pec
    
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}