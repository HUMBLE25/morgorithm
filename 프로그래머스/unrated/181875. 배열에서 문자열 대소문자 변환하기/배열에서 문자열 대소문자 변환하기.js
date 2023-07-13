function solution(strArr) {
    const handelMap = (el,id) => {
        return id % 2 ?  el.toUpperCase() : el.toLowerCase()
    }
    return strArr.map(handelMap);
}