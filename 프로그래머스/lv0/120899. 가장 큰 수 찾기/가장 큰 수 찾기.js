function solution(array) {
    //수도코드
    //정수배열을 입력받고 그중에서 가장큰수와 그수의 인덱스를 배열에 담아서 반환해야한다.
    //Math.max()매소드를 이용하고 indexOf()매소드를 이용하면 되지않을까?
    
    //Math.max()매소드를 이용하여 입력받은 정수배열의 요소중에서 가장 큰수를 찾아낸다.
    const max = Math.max(...array);
    //Array.prototype.indexOf() 매소드를 이용하여 가장큰수의 인덱스 값을 찾아낸다.
    const id = array.indexOf(max);
    //찾아낸 두 값을 배열에 담아 반환한다.
    return [max,id]
    
    
    
    
}