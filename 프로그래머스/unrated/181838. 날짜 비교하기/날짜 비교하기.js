function solution(date1, date2) {
    for(const id in date1){
        console.log(date1[id] < date2[id])
        if(date1[id] < date2[id]) return 1;
        if(date1[id] > date2[id]) return 0
    }
    return 0
}