function solution(my_string, indices) {
    // let answer = '';
    // for(let id in my_string){
    //     if(!indices.includes(+id)) answer += my_string[id]
    // }
    // return answer
    
    return [...my_string].reduce((acc,cur,id) => {
        return !indices.includes(+id) ? acc + cur : acc
    },'')
}