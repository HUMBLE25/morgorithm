function solution(board, k) {
    return board.reduce((acc,cur,id) => acc + cur.reduce((acc,ch,idx) => id + idx <= k ? acc + ch : acc,0),0)
}