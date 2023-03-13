function solution(keyinput, board) {
    //수도코드
    //캐릭터의 이동반경에 제한이 있다. board에의해 정해진다.
    //좌표의 최대 크기를 정해 줘야한다.
    //크기를 벗어난 다면 방향키 입력을 무시한다는 것은 그이후의 연산을 하지 않겠다는 것 인가?
    //범위를 벗어나는 방향은 무시하고 그렇지 않은 방향은 수용한다.
    //board의 절반에서 소수점을 날린다.
//     board = board.map((el)=> Math.trunc(el/2));
//     let location = [0,0];
//     for(let id in keyinput){
//           console.log(location)
//         //최댓값과 같을 경우
//         if(Math.abs(location[0]) === board[0] ){
//             // 전과 같은 방향이라면 변화 없고 다른 방향일 경우 변화를 준다.
//             if(keyinput[id] !== keyinput[id -1]){
//                if(keyinput[id] === 'right') location[0]++
//                if(keyinput[id] === 'left') location[0]--
//             };

//         }else{
//             if(keyinput[id] === 'right') location[0]++
//             if(keyinput[id] === 'left') location[0]--
//         };
      
//           if(Math.abs(location[1]) === board[1]){
//             // 전과 같은 방향이라면 변화 없고 다른 방향일 경우 변화를 준다.
//             if(keyinput[id] !== keyinput[id -1]){
//                 if(keyinput[id] === 'up') location[1]++
//                 if(keyinput[id] === 'down') location[1]--
//             }
//         }else{
//             if(keyinput[id] === 'up') location[1]++
//             if(keyinput[id] === 'down') location[1]--
//         };
        
//     };
//     return location;
    let key = {"right" : [1,0], "up" : [0,1], "down" : [0,-1], "left" : [-1,0]};
    let result = keyinput.map(v => key[v]).reduce((a,b) => { 
        if (Math.abs(a[0] + b[0]) > board[0]/2 || Math.abs(a[1] + b[1]) > board[1]/2) 
            return [a[0],a[1]] ; 

        return [a[0] + b[0], a[1] + b[1]];}
    , [0,0])


    return result;
}