function solution(my_string, m, c) {
    let answer = '';
    // for(let i = 0; i < my_string.length / m; i ++){
    //     answer += my_string[i * m + c - 1];
    // }
      for(let i = 0; i < my_string.length; i += m) {
        answer += my_string[i + c - 1]
    }
    return answer;
    
    // return Array.from(Array(my_string.length / m), (_,i) => {
    //      return my_string[i * m + c - 1]
    // }).join('')
}