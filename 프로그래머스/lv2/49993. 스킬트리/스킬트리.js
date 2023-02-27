function solution(skill, skill_trees) {
    //수도코드
    //선행스킬순서를 담은 문자열과 유저가 만든 스킬트리 문자 배열을 입력받고 숫자를 반환한다.
    //스킬을 배우는 순서가 정해져 있다.
    //배열의 순서가 정해져 있다.
    //가능한 스킬트리 개수를 반환한다.
    
    //배열에 담긴 문자의 순서를 검증해야 한다.
    //스킬이 중복되지 않는다.
    
    //순서가 정해져 있다. 선행스킬보다 먼저 스킬을 배우면 안된다.
    //skill의 문자열에서 인덱스가 낮은 순서대로 나열 되있어야 한다.
    //그 순서를 지키지 않는다면 올바른 스킬 트리가 아니다.
    
    //skill_trees의 각 요소에서 skill의 모든 요소를 가지고 있는건 아니다. 
    //순서를 지켜야한다. 인데스로 비교해야한다.
    
    //순서를 비교하는것이면 정규표현식을 이용할수도 있지 않을까?
    
    //입력받을수 있는 배열의 경우를 생각해본다.
    //가능한 스킬트리의 개수.
    // 1.순서가 뒤섞인 겨우, 앞에 와야하는것이 뒤에 온경우.
    // 2.Skill에 포함되지 않은 경우.
    
    //선행스킬이 오지 않은 경우 
    //단순히 인덱스의 크기만 비교한다고 알수 있는게 아니다.
    //선행의 의미는 0번째 인덱스가 꼭있어야한다. 
    //그전의 스킬을 꼭 포함하고 있어야 하며 결국은 0번째 인덱스까지 포함되어야한다.
    
    let result = 0;
  
    for(let i =0; i < skill_trees.length; i++){
    let str ='';

        for(let j=0; j < skill_trees[i].length; j++){
            if(skill.includes(skill_trees[i][j])){
                str += skill_trees[i][j]
            }  
        }
        console.log(str)
        if(str==='') str = skill;
        if( skill.includes(str)){
            if(str[0]===skill[0]){
                // console.log(str)
                result ++
            }
        }
    }
  return result
}