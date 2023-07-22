function solution(arr, intervals) {
    //같은 동작을 두번하는것 인데 줄일 수 없을까? 코드를 ?
    //동작을 한번에 할 수 없을까? 
    // const arr1 = arr.slice(intervals[0][0],intervals[0][1] + 1);
    // const arr2 = arr.slice(intervals[1][0],intervals[1][1] + 1);
    // return [ ...arr1 , ...arr2 ];
    // return intervals.reduce((acc,cur) => 
    //                         [...acc,...arr.slice(cur[0],cur[1] + 1)]
    //                         ,[]);
    
    //구조분해 할당
    [[a,b],[c,d]] = intervals;
    return [...arr.slice(a,b+1),...arr.slice(c,d+1)];
    
    
}