function solution(sides) {
    //수도코드
    //최댓값이 나머지의 합보다 작아야한다.
    //주어진 두변중 하나가 최댓값인 경우, 둘다 작은수인 경우.
    //0번째 인덱스가 최댓값인 경우 sides[0] < sides[1] + num, num < sides[0];
    //1번째 인덱스가 최댓값인 경우 sides[1] < sides[0] + num, num < sides[1];
    // => Math.abs(sides[0]-sides[1]) < num , num < 둘중 최댓값;
    //둘다 작은 수인 경우 sides[0] + sides [1] > num , num >둘중 최댓값;

    //둘중하나가 최댓값인 경우 시작하는 수
    const start = Math.abs(sides[0]-sides[1])+1;
    //입력받은 수모두 최댓값이 아닌경우 가능한 수의 최댓값
    const end = sides[0] + sides [1];
    //정답을 담을 answer를 선언하고 0을 할당한다.
    let answer=0;
    for(let num = start ;num < end ; num++){
        answer++;
    }
    //answer를 반환한다.
    return answer
 
}