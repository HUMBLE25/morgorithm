function solution(name, yearning, photo) {
    // name과 yearning이 매칭이 되는 것이다.
    // name을 key로하여 객체를 만들고 그 객체를 이용하여 photo에서 누적연산을 하면 되지 않을까?
    // 빈객체를 만들고 반복문을 활용하여 객체를 만든다.
    let obj ={}
    for(let i in name){
        obj[name[i]]=yearning[i]
    }
    const result = photo.map((el)=>{
        return el.reduce((acc,cur)=>obj[cur] ? acc + obj[cur]:acc ,0)
    })
    return result
}