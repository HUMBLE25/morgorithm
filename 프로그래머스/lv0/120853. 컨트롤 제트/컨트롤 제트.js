function solution(s) {
    //수도코드
    //"1 2 Z 3"인경우 1+2-2+3이다.
    //Z앞의 수를 제외하고 모든 수를 더한다는 의미이다.
    //정규표현식으로도 가능할것이고 여러가지 방법이 있을것이다.

       //공백을 기준으로 split으로 나눈다.
       return s.split(' ')
                   //생긴 배열을 filter매소드로 걸러준다.
                   //현재 요소가 'Z'가아니고 다음인덱스의 요소가 'Z'가 아닌경우를 담아준다.
                .filter((el,i,arr)=>{return 'Z'!==arr[++i] && 'Z'!==el})
                   //남은요소들을 모두 더해준다.
                .reduce((acc,cur)=>acc+Number(cur),0)
}