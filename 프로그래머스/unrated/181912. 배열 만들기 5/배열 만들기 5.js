function solution(intStrs, k, s, l) {
    // const answer = [];
    // intStrs.forEach((el) => {
    //     // const num = +el.slice(s,s + l);
    //     const num = Number.parseInt(el.slice(s,s + l))
    //     if(num > k){
    //         answer[answer.length] = num;
    //     }
    // });
    // return answer;
    return intStrs.reduce((acc,cur)=>{
        const num = +cur.slice(s,s+l);
        if(num > k) acc[acc.length] = num;
        return acc
    },[])
}