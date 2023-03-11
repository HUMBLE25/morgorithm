function solution(arr) {
    //수도코드
    // //내림차순으로 정렬을 한다.
    // arr.sort((a,b)=>b-a).pop()
    // //0 == false이므로 삼항연산자를 사용하여 경우를 나눠주고 반환한다.
    // return arr.length ? arr : [-1]
    
    //최솟값을 찾고 splice매소드로 잘라내자.

    let min = Math.min(...arr);
    let id = arr.indexOf(min);
    arr.splice(id,1)
    return arr.length ? arr : [-1]
    

  
}