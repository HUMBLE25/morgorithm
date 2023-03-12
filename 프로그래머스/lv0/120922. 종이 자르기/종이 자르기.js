function solution(M, N) {
    //수도코드
    //가로 먼저 자른다고 생각했을 경우 N-1 회 가위질로 잘라낸다.
    //이때 N개의 종이가 생긴다.
    //N개의 종이를 M-1회 가위질로 잘라낸다.
    // return N-1 + N*(M-1)
    return N*M -1
}