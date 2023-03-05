function solution(before, after) {
    //수도코드
    //순서를 바꾸어서 after를 만들수 있다는것의 의미는 뭐지?

    //포함하고 있는지 아닌지를 확인하면된다.
    //replace매소드를 사용하여 before의 요소를 가지고 있으면 ''으로 대체해준다.
    for(let el of before){
        after=after.replace(el,'')
    }
    //after에 문자열이 남아 있다면 바꿀수 없는것이므로 0을 반환,
    //남아 있지 않다면 1을 반환한다.
    return after === '' ?1:0
    
}