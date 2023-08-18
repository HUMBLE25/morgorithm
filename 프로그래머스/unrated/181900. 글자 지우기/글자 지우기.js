function solution(my_string, indices) {
    let answer = '';
    for(let id in my_string){
        if(!indices.includes(+id)) answer += my_string[id]
    }
    return answer
}