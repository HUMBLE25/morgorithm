def solution(name, yearning, photo):
    #딕션너리를 만든다. key:name. value:yearning
    dic = dict(zip(name,yearning))
    answer =[]
    for li in photo:
        add = 0
        for x in li:
            try: 
                add += dic[x]
            except KeyError : 
                add += 0
        answer.append(add)
    print(answer)
    return answer
            


