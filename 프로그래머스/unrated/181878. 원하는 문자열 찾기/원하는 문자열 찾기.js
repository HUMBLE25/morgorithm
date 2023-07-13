function solution(myString, pat) {
    const str1 = myString.toLowerCase();
    const str2 = pat.toLowerCase();
    return +str1.includes(str2);
}