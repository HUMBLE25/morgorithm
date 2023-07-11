function solution(arr) {
    const handleNum = (el) => {
        if(el >= 50){
            return el % 2 ? el : el/2;
        }else{
            return el % 2 ? el * 2 : el;
        }
    }
   return arr.map(handleNum)
}