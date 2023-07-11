function solution(str_list, ex) {
    // return str_list.filter(e => !e.includes(ex)).join('');
    const reducer = (acc,cur) =>{
        return !cur.includes(ex) ? acc + cur : acc + '';
    }
    return str_list.reduce(reducer,'');
    
}