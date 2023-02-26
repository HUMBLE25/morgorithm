function solution(numbers, direction) {
    //수도코드
    //방향에따라 한칸씩 회전시킨다.
    //right의 경우 마지막 인덱스의 요소를 0번쨰 인덱스자리로 옮긴다.
     //=>pop()매소드로 마지막 인덱스를 제거하고,
     //unshift()매소드로 그요소를 0번째인데스자리로 옮긴다.
    //left의 경우 첫번째 인덱스를 마지막 인덱스 요소로 옮긴다.
     //=>shift()매소드로 첫번쨰 인덱스를 제거하고,
     //push()매소드로 마지막 인덱스자리에 넣어준다.
    direction === 'right' 
        ? numbers.unshift(numbers.pop())
        : numbers.push(numbers.shift())
        return numbers
    
    //스프레드와 slice()매소드를 사용할수 도 있다.
    //right의 경우 마지막인덱스를 length를 이용하여 접근하고, 
    //가장 앞 인덱스부터 마지막 직전까지 slice()매소드를 이용하여 잘라내고 스프레드 연산자로 다시 합쳐준다.
    //left의 경우 1번째인덱슬부터 잘라내고 첫번째 인덱스를 다음에 두고 스프레트 연산자를 이용해 배열을 다시 합친다.
    //핵심: 스프레드연산자를 배열을 요소를 배열에서 꺼내온다. 그리고 다시 배열에 담아준다.
      return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}