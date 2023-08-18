function solution(arr, flag) {
    return flag.reduce((acc,cur,id) => {
        if(cur){
            return [...acc,...Array.from(Array(arr[id] * 2),() => arr[id])]
        }else{
            return acc.slice(0,acc.length - arr[id])
        }
    },[])
}