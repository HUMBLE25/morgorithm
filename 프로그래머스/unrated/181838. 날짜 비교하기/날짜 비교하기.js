function solution(date1, date2) {
//     for(const id in date1){
//         if(date1[id] < date2[id]) return 1;
//         if(date1[id] > date2[id]) return 0;
//     }
//     return 0
    
    // date1 = new Date(...date1);
    // date2 = new Date(...date2);
    // return + (date1 < date2)
return + (date1.join('') - date2.join('') < 0)
}