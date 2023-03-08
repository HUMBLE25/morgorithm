function solution(dots) {
    //수도코드
    //직사각형이라고 했다. 직사각형은 모든각이 90도이고 마주보는 변의 길이가 같다.
    //이를 생각하면 로직이 간단해진다.
    
    //한점을 기준으로 생각하면 되겠다.
    //x좌표가 같은 점을 찾고 높이의 길이를 구한다.
    //y좌표가 같은 점을 찾고 밑변의 길이를 구한다.
    
    let stan = dots[0]
    let width = 1;
    for(let i = 1; i < dots.length; i++){
        if(dots[0][0]===dots[i][0]){
            width *= Math.abs(dots[0][1]-dots[i][1])
        }
        if(dots[0][1]===dots[i][1]){
            width *= Math.abs(dots[0][0]-dots[i][0])
        }
    }
    return width
}