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
    
//     //유저의 정보를 담을 빈객체를 만든다.
//     let usersInfo={}
//     //Leave의경우 이름을 가지고 있지 않기에 2번째인덱스에 값이 없다.즉 undefined이다.
//     //이를 제외한 경우에 1번째 인덱스를 key로 하고 2번째 인덱스를 value로 하는 객체를 만든다.
//     record.forEach((el)=>{
//         if(el.split(' ')[2]){usersInfo[el.split(' ')[1]]=el.split(' ')[2]}
//     })

//     let answer =[]
//     record
//         .forEach((el)=>{
//         //Enter하고,Leave일때만 문자를 덧붙여 배열에 담아준다.
//         if(el.split(' ')[0] === 'Enter')answer.push(usersInfo[el.split(' ')[1]]+'님이 들어왔습니다.')
//         if(el.split(' ')[0] === 'Leave')answer.push(usersInfo[el.split(' ')[1]]+'님이 나갔습니다.')
//         })
//     return answer
    
    const answer =[];
    const user ={};
    for( let i = 0; i < record.length;i++){
        const [action,uid,nickname] =record[i].split(' ')

        if(nickname){
            user[uid]=nickname;
        }
        if(action !=='Change'){
            answer.push({action,uid})
        }    
        
    }
    for(let idx in answer){
        answer[idx]=user[answer[idx].uid]+(
        answer[idx].action==="Enter"
            ?"님이 들어왔습니다."
            :"님이 나갔습니다."
        )
    }
    return answer
}