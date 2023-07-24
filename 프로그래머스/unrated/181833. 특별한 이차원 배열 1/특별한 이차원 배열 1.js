function solution(n) {
    const makeArr = (el,id) => {
        return Array.from(Array(n),(_,idx)=>{
            return id === idx ? 1 : 0;
        })
    }
    return Array.from(Array(n),makeArr)
}