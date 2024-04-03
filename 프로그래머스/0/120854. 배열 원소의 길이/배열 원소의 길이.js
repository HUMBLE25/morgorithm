function solution(strlist) {
    //수도코드
    //문자열 배열을 입력받고 각 원소의 길이를 구한값을 차례로 배열에 담아서 반환한다.
    //각 인덱스에 접근하여 length를 이용해 원소의길이를 구하고 그것을 차례로 반환한 배열에 담아준다.
    //반환할 배열이 있어야한다. 그러면 어떻게 넣어줄까? push를 이용하면 되지 않을까?
    return strlist.map(el=>el.length)
}