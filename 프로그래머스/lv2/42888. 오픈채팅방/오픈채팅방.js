function solution(record) {
    //수도코드
    //관리자창을 만든다. 사람들이 들어오고 나가는것을 지켜보는
    // 채팅방을 나간후 새로운 닉네임으로 다시 들어간다.
    // 채팅방에서 닉네임을 변경한다.
    //기존에 출력되어 있던 닉네임도 전부 바뀐다.
    //중복닉네임을 허용한다.
    //uid를 기준으로 생각해보자.
    // Enter==='님이 들어왔습니다.'
    // Leave==='님이 나갔습니다.'
    //유저의 정보를 담은 객체와 그를 담은 배열을 만들자.
    let usersInfo={}
    for(let el of record){
        let name = el.split(' ')[2]
        if(name){
        usersInfo[el.split(' ')[1]]=name
        }
    }
    let answer =[]
    record
        .forEach((el,id)=>{
        if(el.split(' ')[0] === 'Enter')answer.push(usersInfo[el.split(' ')[1]]+'님이 들어왔습니다.')
        if(el.split(' ')[0] === 'Leave')answer.push(usersInfo[el.split(' ')[1]]+'님이 나갔습니다.')
        })
    return answer
}