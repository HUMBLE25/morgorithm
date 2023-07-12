function solution(num_list) {
   return num_list.length >= 11 
       ? num_list.reduce((acc,cur) => acc + cur) 
       : num_list.reduce((acc,cur) => acc * cur);
    // return num_list.reduce((acc,cur)=>{
    //     if(num_list.length >= 11){
    //         return acc + cur;
    //     }else{
    //         return acc * cur;
    //     }
    // })
}