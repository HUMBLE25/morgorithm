function solution(myString) {

    const answer = [...myString].reduce((acc,cur,id,arr) => {
        if(cur !== 'x'){
            //전경우가 x인 경우
            if(arr[+id -1] === 'x'){
                return [...acc,cur];
            }else{
            //전경우가 x가 아닌 경우
                acc[acc.length -1] 
                    ? acc[acc.length -1] =  acc[acc.length -1] + cur
                    : acc[acc.length] =   cur
                return acc;
            }
        }else{
            return acc;
        }
    },[]);
    return answer.sort();
}