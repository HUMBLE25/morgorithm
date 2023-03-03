function solution(array, n) {
    //수도코드
    //가장가까운수를 반환해야한다.
    //가장 가까운수는 뭘까? 차이의 절댓값이 가장 작은수가 가장 가까운수이다.
    //가장 가까운수중에서 더작은수를 반환한다고 한다.
    //예) [3,4,5,8,10],9이런상황일경우 8,10의 차이의 절댓값이 가장 작다.
    //8이10보다 작으므로 8을 반환한다.
    //예) [8,8,8,8,10]9이라면 8을 반환한다.
    //반복문을 사용해보자.
 
    // //로직에 구멍이 있다.
    // //첫번째 요소를 가장 가까운 수라고 가정한다.
    // let close = array[0];
    // //첫번쨰요소와의 차이가 가장 작다고 가정한다.
    // let diff = Math.abs(n-array[0]);
    // for(let i=1; i<array.length; i++){
    //     //차이의 절댓갑이 diff보다 작거나 같을 경우 
    //     if(diff >= Math.abs(n-array[i])){
    //         //가까운 수보다 작을경우 이때가 가까운수가 된다.
    //         //현재갑을 close에 재할당한다.
    //         if(close > array[i]){
    //             close =array[i]
    //               diff = Math.abs(n-array[i]);
    //             close = array[i];
    //         }
    //         //차이값을 재할당해주고,close의 값을 현재값으로 재할당해준다.
    //         diff = Math.abs(n-array[i]);
    //         close = array[i];
    //     }
    // }
    // return close
    
    //차이의 절댓값을 키로 하고 배열의 요소를 밸류로 하는 객체를 만든다.
    let obj ={};
    for(let el of array){
        //이미 있는경우 요소가 더 작은 경우를 넣어 준다.
        if(!obj[Math.abs(el-n)]){
            obj[Math.abs(el-n)]=el
        }else if(obj[Math.abs(el-n)] > el){
            obj[Math.abs(el-n)]=el
        }
    }

   
    for(let key in obj){
    return obj[key]
    }

    
    
    
}