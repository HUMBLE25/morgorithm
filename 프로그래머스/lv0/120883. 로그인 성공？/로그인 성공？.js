function solution(id_pw, db) {
    //수도코드
    //아이디와 비밀번호의 일치를 검증해야한다. 
    //0번째 인덱스와 1번째 인덱스가 각각 아이디와 비밀번호이니 인덱스로 접근하여 비교하면된다.
    
    for(let el of db){
        if(id_pw[0]===el[0]){
            return id_pw[1]===el[1] ? "login" :"wrong pw"
        }
    }
    return "fail"
}