// function solution(polynomial) {
//     let fac = 0;
//     let num = 0;
//     for(let el of polynomial.split(' + ')){
//         el.includes('x')
//             ? el.length === 1 
//                         ? fac += 1 
//                         : fac += Number(el[0])
//             : num += Number(el)
//     }
//     if (fac === 0){
//         return `${num}`
//     }else if (num === 0){
//         return fac === 1 
//             ? `x` 
//             : `${fac}x`
//     }else{
//          return fac === 1 
//             ? `x + ${num}` 
//             : `${fac}x + ${num}`
//     }
    
// }


//

function solution(polynomial) {
    let fac = 0;
    let num = 0;
    for(let el of polynomial.split(' + ')){
        if(el.includes('x')){
            if(el.length === 1){
                fac += 1;
                num += 0;
            }else{
                fac += Number(el.split('x')[0]);
                num += Number(el.split('x')[1]);
            }
        }else{
            fac += 0;
            num += Number(el);
        }
    }
    if (fac === 0){
        return `${num}`;
    }else if (num === 0){
        return fac === 1 
            ? `x` 
            : `${fac}x`;
    }else{
         return fac === 1 
            ? `x + ${num}` 
            : `${fac}x + ${num}`;
    }   
}
