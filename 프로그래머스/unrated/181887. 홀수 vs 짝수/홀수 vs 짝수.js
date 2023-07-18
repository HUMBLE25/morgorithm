function solution(num_list) {
    const bigger = (a,b) => {
       return a >= b ? a : b;
   }
   const reducer = (acc,cur,i) => {
        return  i % 2 ? [acc[0] + cur,acc[1]] : [acc[0] ,acc[1] + cur];
   } 
   const nums = num_list.reduce(reducer,[0,0]);
   return bigger(...nums)
    
}