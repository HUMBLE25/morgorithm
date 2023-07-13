function solution(my_string) {
    //fillter매서드를 사용했는데 다른 방식은 없을까? 좀더 효율적인 방법은 없나?
    return my_string.split(' ').filter((el)=>el)
}