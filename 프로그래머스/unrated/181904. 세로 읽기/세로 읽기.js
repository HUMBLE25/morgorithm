function solution(my_string, m, c) {

    return Array.from(Array(my_string.length / m), (_,i) => {
         return my_string[i * m + c - 1]
    }).join('')
}