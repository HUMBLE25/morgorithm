function solution(balls, share) {
    //수도코드
    //두 숫자를 입력받고 숫자를 반환하는 상황이다.
    //가지고 있는 구슬은 모두 다 다르다.
    //나누어 줄 구슬의 경우를 반환하면 된다.
    //서로다른 구슬을 share만큼 뽑으면 된다.
    //balls :3,share:2 => 3 * 2 * 1 /( 1 * 2 * 1) === 3 
    //balls : 5, share : 3 => 5 * 4 * 3 * 2 * 1/( (5-3)*(5-4)*3*2*1 ) === 10 
    
    //위의 계산식대로 하려면 어떻게 해야 할까?
    //수학 매소드가 있을까? 반복문을 사용해야 할까?
    
    //팩토리얼 을 계산하는 함수를 만들어주자.
 
    // const makefactorial =(num)=>{
    //     let result = 1
    //     for(let i = 1; i <= num  ; i ++ ){
    //         result *= (i)
    //     }
    //     return result 
    // }
    //재귀 함수를 사용해보자.
    
    const makefactorial =(num)=>{

        if(num === 0){
            return 1
        }else{
            return num * makefactorial(num-1)
            // *연사자를 함수앞에 붙인이유: 계속적으로 연산이 가능해진다.
        }
       
    }
     // const makefactorial = (num) => num === 0 ? 1 : num * makefactorial(num - 1)
     const answer =  makefactorial(balls)/(makefactorial(share)*makefactorial(balls - share ))
     //Math.round() 메소드를 사용한이유 :원치 않게 소수점에 생기는경우가 생기는데 그때를 위해 소수점을 제거 해주었다.
     //trunc()를 사용할수도 있는데 사용하지 않은 이유는 소수점을 제거하는것보다는 가장 가까운 수를 반환하는게 맞기에 round를 사용했다.
     return Math.round(answer)
    
  //   return (
  //       //누적으로 곱하는것이니 reduece를 사용할수 있고 반복문을 직접사용하지 않고 함수형프로그래밍으로 접근한것 같다.
  //   Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) =>{console.log(a,b),a * b}) /
  //   Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
  // );
  
}