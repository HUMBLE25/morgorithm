function solution(array) {
    //수도코드
    
    // //입력받은 배열을 join매소드로 문자열로 만들고 
    // //정규표현식을 이용한 match매소드로 7을 담은 배열을 만든다.
    // const seven =array.join('').match(/7/g)
    // //7이없다면 seven에는 null이 담기므로 이때는 0을 반환한다
    // //7이있을 경우에는 이를 담은 배열을 반환하므로 이때 배열의 길이를 반환한다.
    // return seven ? seven.length : 0
    
    //7을 기준으로 split하였을떄의 배열의 길이를 이용하자.
    return array.join('').split(7).length -1
}