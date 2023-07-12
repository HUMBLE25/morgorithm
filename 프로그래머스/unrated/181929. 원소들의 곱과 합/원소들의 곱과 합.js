function solution(num_list) {
    const multiful = num_list.reduce((acc,cur)=>{
        return acc * cur;
    },1);
    const add = num_list.reduce((acc,cur)=>{
        return acc + cur;
    },0) 
return +(multiful < add**2)
}