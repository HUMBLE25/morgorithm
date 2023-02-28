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
    
    //앞단어의 뒷글자와 뒷단어의 첫글자가 같은지 확인해야 한다.
    //다르다면 그때의 사람과 순회횟수를 반환해야한다.
    //이는 연산으로 구할 수 있다.
    //이중반복문을 이용하고 그때의 인덱스를 받아오자.
    for(let i = 1; i < words.length;i++){
        const nowWord = words[i][0]
        const preWord = words[i-1][words[i-1].length-1]
        const people = i%n + 1;
        const turn = i/n;
        console.log( preWord, nowWord)
        console.log("#######")
        
//         if(preWord !== nowWord){
        
//             // console.log( preWord, nowWord,i,people,turn)
//         }else{
//             return [0,0]
//         }
    }
    


    
}