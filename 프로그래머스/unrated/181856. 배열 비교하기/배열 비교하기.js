function solution(arr1, arr2) {
      const reducer = (acc,cur) => {
            return acc + cur;
      };
     if(arr1.length === arr2.length){

           const total1 = arr1.reduce(reducer,0);
           const total2 = arr2.reduce(reducer,0);

           if (total1 === total2){
               return 0;
           } else if(total1 > total2){
               return 1;
           } else {
               return -1;
           }

       } else if (arr1.length > arr2.length){
           return 1;
       } else {
           return -1;
       };
}