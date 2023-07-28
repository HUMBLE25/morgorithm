function solution(a, d, included) {
    const numArr = Array.from(Array(included.length),(_,id) => a + (id * d))
    return numArr.reduce((acc,cur,id)=>{
        return included[id] ? acc + cur : acc
    },0)
}