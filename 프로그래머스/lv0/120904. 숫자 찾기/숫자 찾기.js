function solution(num, k) {
    //수도코드

    //includes매소드를 구현하라는거지 않을까?
    //데이터타입이 숫자냐 문자냐에따라 다르다.
   
    //indexOf매소드와 삼항연산자를 이용했다.
    //num은 숫자형데이터 타입이기때문에 ''를 더해주어 문자형 데이터타입으로 바꾸고 indexOf매소드를 사용한다.
    return(num+'').indexOf(k)!== -1 
                        ?(num+'').indexOf(k)+1
                        :(num+'').indexOf(k)
}