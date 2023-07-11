function solution(num_list) {
    let odd = '';
    let even = '';
    for(let el of num_list){
        el % 2 ? odd += el : even += el ;
    };
    even = +even;
    return +odd +even;
}