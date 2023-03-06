function solution(my_string) {
    //수도코드
    //입력받은 문자열의 자연수들의 합을 구하려면
    //입력받은 문자열에서 자연수를 뽑아와야 한다.

    //연속된수를 하나의 수로 간주한다

    return my_string
        //정규표현식을 이용하여 대문자와 소문자를 기준으로 split매소드를 사용한다.
        .split(/[A-Za-z]/g)
        //''이 생기는데 이를 filter매소드로 걸러준다.
        .filter((el)=>el)
        //reduce매소드를 사용하여 누산해준다.
        .reduce((acc,cur)=>{
           return acc+ Number(cur)
        },0)
        //이자체의 결과값을 바로 반환한다.
    
}