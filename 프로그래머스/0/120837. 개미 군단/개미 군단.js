function solution(hp) {
    //수도코드
    //가능하다면 적은 개미를 데리고 나간다.
    //장군개미-5,병정개미-3,일개미-1
    //공격력 순서대로 배열에 담고 배열의 길이만큼 반복문을 반복하고
    //hp를 공격력으로 나눈 몫을 결과로 보낼 변수에 담아주고
    //공격한 만큼 hp에서 제외시켜주고 반복을 이어간다.
    //몫과 나머지. 나머지를 재할당 시켜주면 된다.
    let marine = [5,3,1]
    let result = 0
    for(let el of marine){
        result += parseInt(hp/el)
        hp = hp%el
    }
    return result
}