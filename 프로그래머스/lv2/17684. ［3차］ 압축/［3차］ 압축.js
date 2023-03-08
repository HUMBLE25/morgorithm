function solution(msg) {
    //글자들의 색인 번호를 저장하기 위해 사용할 객체
    const dictionary = {};
    let index = 1;
    for( let i = 65; i <= 90; i++){
        dictionary[String.fromCharCode(i)] = index++;
    }
    
    let str = '';//여러개의 글자를 담기 위한 변수
    return msg.split('').reduce((acc,cur,i)=>{
        str += cur;
        const next = str + msg[i+1];
        if(!dictionary[ next ]){
            if(msg[i+1])dictionary[next]=index++
            acc.push(dictionary[str])
            str = '';
        }
        return acc 
    },[])

}