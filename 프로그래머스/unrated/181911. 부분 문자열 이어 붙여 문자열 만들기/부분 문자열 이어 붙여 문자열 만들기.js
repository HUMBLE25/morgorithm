function solution(my_strings, parts) {
    const reducer = (acc,cur,id) => {
        parts[id][1] += 1
        return acc + cur.slice(...parts[id]);
    }
    return my_strings.reduce(reducer,'')
}