function solution(my_string) {
    //수도코드
    
    // //new Set을 이용하여 중복된 단어를 제거하고,
    // //스프레드 연산자를 이용해 배열에 담고,
    // //join매서드로 합쳐준다.
    return [...new Set(my_string)].join('')
    
    //다른방식으로 풀어보자.
    //반환할 변수에 담아주고 있는지 없는지 확인한다. includes를 이용한다.
    // let answer ='';
    // for(let el of my_string){
    //     if(!answer.includes(el)){
    //         answer+=el;
    //     };
    // };
    // return answer
    
    //배열의 매소드를 이용한 풀이
    // return [...my_string]
    //     .filter((el,id,arr)=>{
    //     return id === arr.indexOf(el)
    //     })
    //     .join('')
}