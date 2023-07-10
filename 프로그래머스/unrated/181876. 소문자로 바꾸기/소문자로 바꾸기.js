function solution(myString) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let answer = '';
    for(let el of myString){
        const id = alphabet.indexOf(el);
        id >= 26 
            ? answer += alphabet[+id -26]
            : answer += el;
    };
    return answer;
}