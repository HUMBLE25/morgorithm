function solution(board, k) {
    return board.reduce((acc,cur,id) => {
       return acc + cur.reduce((acc,ch,idx) => {
           return id + idx <= k ? acc + ch : acc;
       },0) 
    },0)
}