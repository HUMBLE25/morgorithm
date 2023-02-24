function solution(num_list, n) {
    //수도코드
    //정수 배열과 정수를 입력받고 이를 2차원 배열로 바꿔 반환하면 된다ㅏ
    //인덱스 순서대로 n개씩 배열로 묶어준다.
    //주어진 배열의 길이가 8이고 n이 2라면 2*4 배열로 만들어준다.
    //배열의 길이는 무조건 n의 배수이다.
    
    //n만큼 새로운 배열에 담고 그배열은 반환할 배열에 담아준다.
    //  let answer = []
    //  let sender = []
    // for(let el of num_list){
    //       sender.push(el)
    //     if(sender.length === n){
    //         answer.push(sender)
    //         sender =[]
    //     }
    // }
    // return answer
    
    //이중배열의 수를 구하고 이를 빈배열로 만든다.
    //splice매소드를 이용한 이유: 정해준 범위만큼 잘라내주기 때문에 연속적으로 잘라낼수 있다.
    const double =Array(num_list.length/n).fill([])
    return double.map(() => num_list.splice(0, n))
    
}