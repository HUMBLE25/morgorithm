function solution(n) {
    //수도코드
    //소수는 약수가 본인과 1뿐인 수이다.
    //그수들을 담아내야 한다.
    //n을 나누어떨어지게 하는 수중에서 소수를 반환하면 되는거다.
    
    //약수를 구하고 배열에 담아 반환하는 함수
      const makeDivisor = (k) =>{
       return  Array  
                    //1부터 k까지 담은 배열을 만든다.
                    .from(new Array(k), (_, i) => { return i+1 })
                    //k를 나누어 떨어지게 하는 수를 담는다.
                    .filter((el) => k % el === 0);
      }    
      
      //약수를 구한다.
      //약수의 약수가 소수라면 즉 약수 배열의 길이가 2이라면 
     return  makeDivisor(n) 
                    .filter((el)=>{ 
                        return makeDivisor(el).length === 2
                    })

    
}