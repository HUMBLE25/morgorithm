//입력받은 문자열의 알파벳순서를 참조하기 위해 소문자알파벳을 순서대로 나열한 문자열을 만든다. 
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function solution(my_string) {
    //toLowerCase매소드를 이용하여 입력받은 문자를 소문자로 만들고 이를 다시 my_string에 할당해준다.
    my_string = my_string.toLowerCase()
    //sort매소드를 사용하여 정렬 시켜주기위해 스프레드연산자를 이용하여 배열로 만든다.
    const answer = [...my_string]
    //위에서 만든alphabet에 indexOf를 사용하여 알파벳순서대로 오름차순 정렬을 시켜준다.
                    .sort((a,b)=>{return alphabet.indexOf(a)-alphabet.indexOf(b)})
    //반환하기 위해 join매소드를 이용하여 문자열로 만들어준다.
                    .join('')
    //반환한다.
    return answer
}