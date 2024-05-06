function solution(score) {
    // 수도코드
    // 수학 점수와 영어 점수를 담은 2차원 배열이 주어진다.
    // 평균 점수를 기준으로 등수를 담은 배열을 반환해야 한다.
    // 과목수과 모두 동일하므로 두 원소의 합을 비교하여 등수를 알아낼 수 있을 것이다.
    // 원소의 합이 같을 지라도, 같은 배열은 없다.
    // 공동순위가 존재하면 나머지는 없도록 한다. 
    // 전체 등수를 어떻게 나열할 수 있을까?
    // 각 원소의 등수를 어떻게 보여주지?
    // sort함수를 이용한다. 정렬할 수 있다. 
    // 합에 해당하는 인덱스 값을 반환하면 된다.
    // 1. 요소끼리의 합하여 새로운 배열을 만들고 정렬한다.
    // 2. 새로운 배열을의 인덱스 값을 이용하여 등수를 파악한다.
    
    const hap = score.map((el)=>{
        return el[0] + el[1]
    })
    // 등수를 찾는 함수
    const findRanking = (el,arr)=>{
        for(let i = 0; i<arr.length; i++){
            const sum = el[0]+el[1]
            if(sum == arr[i]){
                return i+1
            }
        }
    }
    console.log(hap.sort((a,b)=>b-a))
    return score.map((el)=>{
        return findRanking(el,hap)
    })
}