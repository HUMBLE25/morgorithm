const permission = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
function solution(new_id) {
    //수도코드
    //규칙에 맞는지 검증 => 규칙에 맞지않다면 규칙에 맞는 아이디를 추천한다.
    //소문자,숫자,빼기,밑줄,마침표문자만 사용할수 있다.
    //마침표는 처음과 끝에 사용할수 없으며 연속으로 사용할수 없다. 이또한 검증해야한다.
    //이들은 정규표현식으로 검증해야하지 않을까?
    //검사단계를 참고해보자.
    //검사단계를 구현해내야한다.

//     //1.new_id의 모든 대문자를 대응되는 소문자로 치환합니다. OK
//     new_id = new_id.toLowerCase()
//     //2.new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다. OK?
//     new_id=new_id.replace(/[^-\_\w\.]/g,'')
//     //3.new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
//     while(new_id.includes('..')){
//         new_id=new_id.replace('..','.')
//     }
    
//     //4.마침표가 처음에 있으면 제거한다.
//     if(new_id[0]==='.'){
//         new_id = new_id.slice(1)
//     }

//     //마침표가 마지막에 있으면 제거한다.
//     //마지막 마침표를 제거하는 로직이 두번반복되기에 함수를 만든다.
//     const dleteLastDot=()=>{
//         if(new_id.at(-1)==='.'){
//             return new_id = new_id.slice(0,new_id.length-1)
//         }
//     }
//    dleteLastDot()
    
//     //5.빈문자열이면 a를 대입한다.
//    if(new_id===''){
//        new_id ='a'
//    }
//     //6.16자 이상이면 15자를 제외하고 모두 제거한다.
//     if(new_id.length >=16){
//         new_id=new_id.slice(0,15)
//     }
//     //마지막에 .이 있다면 제거한다.
//      dleteLastDot()
    
//     //7.길이가 2자이하라면, 길이가 3이 될때까지 마지막을 반복한다.
//     if(new_id.length <=2){
//        new_id= new_id.padEnd(3,new_id.at(-1))
//     }
//     return new_id
    
//     //배열을 이용해보자.
//     new_id = new_id.toLowerCase()
//     new_id = new_id.replace(/[^-\_\w\.]/g,'')
//     //3.마침표가 두개이상 반복되는것이 있다면 하나의 마침표로 치환한다.
//     //filter매소드를 이용하면 참값만 남기게된다.
//     //.과 연속되지 않는것과 .이 아닌 값을 남기면 된다.
//     let answer =new_id.split('').filter((el,i) =>{
//         return el !== '.' || (el==='.' && new_id[i+1] !== '.') 
//     })
//     //4.마침표가 처음이나 끝에 있다면 제거한다.
//     if(answer[0]==='.'){
//         answer.shift()
//     }
//     //마침표가 끝에 있으면 제거한다.
//     if(answer[answer.length -1]==='.'){
//          answer.pop()   
//     }
//     //5.빈문자열이면 a를 대입한다.
//     if(answer.length === 0){
//         answer.push('a')
//     }
//     //6.길이가16이상이면 첫15자를 제외한 나머지 문자들을 제거한다.
//     if(answer.length >=16){
//        answer = answer.slice(0,15)
//     }
//     //마침표가 있으면 제거한다.
//     if(answer[answer.length -1]==='.'){
//          answer.pop()   
//     }
//     //7.new_id길이가 2자 이하라면 3이될때까지 반복한다.
//     if(answer.length<=2){
//         // const last = answer[answer.length-1]
//         // for(let i = 0; i<= 3-answer.length; i++){
//         //     answer.push(last)
//         // }
//         const add = new Array(3-answer.length)
//                         .fill(answer[answer.length-1])
//         answer = [...answer, ...add]
//     }

//     return answer.join('')
    
    const answer = new_id
                    .toLowerCase() //1.모두 소문자로 바꾸기.
                    .replace(/[^-\_\w\.]/g,'') //2.소문자,빼기,밑줄,마침표제외한 모든문자 제거.
                    .replace(/\.+/g,'.') //3.두개이상의 마침표가 이어질 경우 하나의 마침표로 대체한다.
                    .replace(/^\.|\.$/g,'') //4.마침표가 처음이나 끝에 위치할경우 제거한다.
                    .replace(/^$/g,'a') //5.빈문자열이라면,new_id에 'a'를 담는다. 
                    .slice(0,15)        //6.15개 문자 이후는 제거하고 마침표가 있다면 제거한다.
                    .replace(/\.$/g,'')

    return answer.length <= 2 
                            ? answer.padEnd(3,answer[answer.length-1])
                            : answer
   
}