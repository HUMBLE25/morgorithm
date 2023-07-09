function solution(myString) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer = '';
    //통과하지 못한다. 문제가 뭐지?
    //하나의 상황을 생각하지 못했다.
    for(let id in myString){
        const el = myString[id];
        if(alphabet.indexOf(el) < 26 ){
            answer += alphabet[+id +26];
        }else{
             answer += el;
        }
        // alphabet.indexOf(el) < 26 
        //                 ?  answer += alphabet[+id +26]
        //                 :  answer += el
    }
    console.log(answer);
    // return answer;
    return myString.toUpperCase();

}