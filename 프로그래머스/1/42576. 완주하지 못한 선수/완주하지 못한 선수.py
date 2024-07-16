def solution(participant, completion):
    # 동명이인이 있는 경우 어떻게 확인하지?
    # 같은경우 없앤다?
    # dictionay로 만든다? 이름의 횟수를증가시킨다?
    # dic으로 만들경우 문제가 생기지 않나? 동명이인의 경우 중복된다. 그러면 초기화되지 않나?
    # 동명이인의 선수 모두가 완주하는 경우는 어떻지? 
    # 배열에서 찾아서 하나씩 없애는 방식을 생각해보자.
    # 배열에서는 어떨게 없애지? 하지만 효율성테스트를 통과하지 못한다.
    # 정렬을 하고 같은 인덱스에 없으면 문제가 되는 것 아닌가?
    # 동명이인 이든 뭐든 지 말이야
    sort_p = sorted(participant)
    sort_c = sorted(completion)

    answer=''
    for i in range(len(sort_c)):

        if sort_p[i] != sort_c[i]:
            answer+=sort_p[i]
            break
    if answer=='':
        answer = sort_p[len(sort_p)-1]
    return answer