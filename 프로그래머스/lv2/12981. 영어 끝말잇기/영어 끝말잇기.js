function solution(n, words) {
    //수도코드
    //n명까지의 차례대로 끝말잇기를 한다.
    //예외상황: 이전에 등장한 단어는 사용불가,한글자도 사용불가.
    //가장먼저 탈락한 사람의 번호와 그사람이 몇번째에 탈락하는지 구해서 반환하면 된다.
    //그사람의 번호와 words의 인덱스가 계속변한다.
    //단어를 기준으로 생각해야할까? 사람의 번호를 기준으로 생각해야 할까?
    //단어를 기준으로 생각.
    //=>단어를 기준으로 생각한다면 해당단어들에 사람의 번호를 순차적으로 이어준다.
    //=>중복되거나, 한글자짜리 단어일경우를 그때 단어릐 인덱스를 찾고 인덱스로 얼마나 순회한것인지 구한다.
    for(let i = 1; i < words.length;i++){
        const nowWord = words[i][0] // 현재 단어의 첫글자
        const preWord = words[i-1][words[i-1].length-1] //전단어의 마지막 글자.
        const people = i%n + 1; // 사람의 번호 
        const turn = Math.trunc(i/n)+1; // 순회횟수
        //끝말잇기가 안되는경우 이거나 단어가 중복된경우 
        //이조건을 만족할경우 [people,turn]을 반환하고 break로 반복을 멈춘다. 
        //words.slice(0,i).includes(words[i]) 현재 단어 전에 이미 있는 단어인지 확인한다.
        //=>리팩토링 인덱스로 접근하여 인덱스가 같지 않다면 앞 단어에 같은 단어가 있다는의미이다.
        if(preWord !== nowWord ||words.indexOf(words[i]) !== i){
            return [people,turn]
            break;
        }
    }
    //여기까지 도달했다면 끝말잇기가 모두 완료되었다는 의미이므로 [0,0]을 반환한다.
    return [0,0]
}