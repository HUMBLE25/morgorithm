function solution(my_string, index_list) {
    const reducer = (acc,cur) => {
        return acc + my_string[cur];
    }
    return index_list.reduce(reducer,'')
}