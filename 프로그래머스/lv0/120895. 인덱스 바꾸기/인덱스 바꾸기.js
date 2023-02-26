function solution(my_string, num1, num2) {
    //수도코드
    //해당인덱스를 바꾼다. 
    //replace()매소드를 사용하면 바꿀수 있지 않을까?
    //인덱스로 각 요소에 접근한다. 그리고 replace매소드를 이용하여 바꾸어 준다.
    // replace매소드는 원본을 바뀌지 않는다.

    
    //요소는 바꾸지 않지만 인덱스만 바꾼다는것이다.
    //객체에 담아서 이들의 인덱스를 바꾸어 주면 되는것인가?
 
    //입력받은 배열의 인덱스를 key로 하고 요소를 value로 하는 객체를 만든다.
    let obj ={};
    for(let id in my_string){
        obj[id] = my_string[id]
    };
    
    //num1,num2의 value에 각각 서로의 요소를 재할당해준다.
    obj[num1]=my_string[num2];
    obj[num2]=my_string[num1];
    
    //더하기할당 연산자로 객체의 value들을 문자열로 묶어준다.
    let answer =''
    for(let id in obj){
        answer+=obj[id]
    }
    return answer
}