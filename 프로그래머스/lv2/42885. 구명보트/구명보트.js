function solution(people, limit) {
    //수도코드
    //구명보트를 최대한 적게사용하여 모든사람을 구출하려면 최대한 많이 탑승시켜야한다.
    //단,합이 limit kg이하 이여야한다.
    //오름차순으로 정렬하고 앞의 두사람의 몸무게의 합을 구한다. limit이하라면 배열에서 제거하고 answer에 1을 올린다.
    //이를 반복하다가 limit kg가 넘는 경우가 생기면 제거하지 않고 이때의 배열의 길이를 answer에 담아준다.
    
    
    //로직에 구멍이 생긴것 같다.
    //큰수랑 작은수랑 더했을때 limit보다 작거나 같아야한다. 
    //이미 태워서 보냈다면 그 몸무게에는 접근하지 못하게 하거나 안해야한다.
    //제거하던지 다른방법을 하던지 해야한다.

    
   
//     people.sort((a,b)=>b-a)
//     let last =people.length-1;//마지막 인덱스
//     let boat = 0; //사람을 태워 보낸수
//     for(let i = 0; i<people.length;i++){
//         //사람을 태워 보낼때마다 null을 할당하고null이라면 이미 태워보낸것이니 반복문을 중지시킨다.
//         if(people[i]===null) break;
//         //태울수 있는 몸무게이다.
//         let weight = limit-people[i];
//         if(weight >= people[last]){
//             //wight보다 몸무게가 적다면 보트에 태워 보낼수 있다.
//             //보냈닫면 null을 할당한다.
//             people[i]=null;
//             people[last]=null;
//             //last를 1씩 줄여 다음으로 몸무게가 적게 나가는 사람을 검증하게한다.
//             last--;
//             //보트를 태워 보냈으면 1씩 증가시켜준다.
//             boat++;
        
//         }else{
//             //위 조건들을 충족하지 않는다면 보트의 수를 증가시켜준다.
//             boat++
//         }
//     }
//     return boat
    
    people.sort((a, b)=>{return a-b});
    let num
    for(let i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
         num=i
    }    
    return people.length - num;
}