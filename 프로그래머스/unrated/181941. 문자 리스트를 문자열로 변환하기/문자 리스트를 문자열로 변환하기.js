function solution(arr) {
    // return arr.join('');
    
    const reducer = (acc,cur)=>{
        return acc + cur;
    }
    return arr.reduce(reducer,'')
    
    // let answer = '';
    // for(let el of arr){
    //     answer += el
    // }
    // return answer;
}