function solution(str1, str2) {
    return [...str1].reduce((acc,cur,id)=>{
       return acc + cur + str2[id] 
    },'')   
}