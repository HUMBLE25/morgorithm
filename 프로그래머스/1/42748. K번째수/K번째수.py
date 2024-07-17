def solution(array, commands):
    # 여러번 자른다는 건가
    # 자름->정렬->추출
    # map객체 사용하면 될것 같은데.. 시나리오좀 짜보자
    # 자르는 거니까 슬라이스.. 파이썬에도 있나?
    # arr = np.array([1, 2, 3, 4, 5, 6, 7])
    answer=[]
    for el in commands:
        result = sorted(array[el[0]-1:el[1]])[el[2]-1]
        answer.append(result)
    print(answer)
    return answer
    