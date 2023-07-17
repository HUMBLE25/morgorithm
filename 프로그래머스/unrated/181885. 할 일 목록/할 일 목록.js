function solution(todo_list, finished) {
    const reducer = (acc,cur,id) => {
        return finished[id] ? acc : [...acc,cur];
    };
    return todo_list.reduce(reducer,[]);
}