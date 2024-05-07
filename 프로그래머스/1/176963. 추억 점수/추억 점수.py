def solution(name, yearning, photo):
    
    # # 1번째 풀이
    # # 딕션너리를 만든다. key:name. value:yearning
    # dic = dict(zip(name,yearning))
    # # 반환할 리스트 answer를 만든다.
    # answer =[]
    # # photo 리스트의 각 아이템에 접근한다.
    # for li in photo:
    #     # 각 반복마다 answer에 넣을 변수 add를 선언한다.
    #     add = 0
    #     # photo의 각 아이템에 접근하여 점수에 따라 누적연산을 한다.
    #     for x in li:
    #         # key가 없는 경우를 대비하여 try.. except를 적용한다.
    #         try: 
    #             # key가 있다면 add에 해당 점수를 더한다.
    #             add += dic[x]
    #         except KeyError : 
    #             # key가 없다면 add에 0을 더한다.
    #             add += 0
    #     # 종합한 add를 answer에 넣는다.
    #     answer.append(add)
    # # 결과를 반환한다.
    # return answer
    
    # # 2번째 풀이
    # dic = dict(zip(name,yearning))
    # # map()사용을 위해 mapfn을 만든다.
    # # 아래 논리는 1번째 풀이와 같다.
    # def mapFn(li):
    #     add = 0
    #     for el in li:
    #         try:
    #             add += dic[el]
    #         except KeyError:
    #             add += 0
    #     return add
    # result = map(mapFn,photo)
    # return list(result)
    
    # 3번째 풀이
    dic = dict(zip(name,yearning))
    def mapFn(li):
        add = 0
        for el in li:
            if el in dic:
                add += dic[el]
        return add
    result = map(mapFn,photo)
    return list(result)
    
    

            


