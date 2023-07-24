function solution(n) {
 
    return Array.from(Array(n),(_,id) => {
        return Array.from(Array(n),(_,idx) => {
            return +(id === idx)
        }
    )})
}