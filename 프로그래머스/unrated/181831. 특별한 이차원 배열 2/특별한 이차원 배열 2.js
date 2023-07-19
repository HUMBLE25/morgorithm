function solution(arr) {
    // map사용? flatmap사용? Map객체 사용?
    // 반복문보다 배열로 푸는게 더빠르지 않나? 배열로 생각해보자.
    // 반복 횟수가 배열의 길이에따라 일정하다.
    // 이중반복문을 피하는 방법은 없을까? 조금더 효율적인 방법들을 고민해보자.
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i][j]!==arr[j][i]){
                return 0;
            }
        }
    }
    return 1
}