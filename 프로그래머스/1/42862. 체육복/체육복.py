# def solution(n, lost, reserve):
#     # 체육복 빌려주기...
#     # 빌려 줄수 있으면 reserve에서 없애 버리면 되겠네
#     # 여벌 체육복이 있는 학생만 빌려줄 수 있다는 의미를 표현해보자. 여벌:reserve 도난 당함: lost 

#     # 다른 여별의 체육복을 검증해야 한다. 
#     # 여벌의 체육복을 도난 당한 경우를 어떻게 예외처리 하지?
#     # 애초에 로직이 달라야 하는 건가? 
#     # 여벌을 도난 당한 경우 빌려 줄 수 없다. 없는 것과 같다.
#     # 5, [4,5], [3,4]의 경우 4는 빌려줄 수 없다. 
#     # 5, [4,5], 3와 같다. 없애야 하는 걸까?
#     # 5, [1,2], [2,3] 은 아래와 같다.
#     # 5, [1,2], [3]
#     # 없애고 시작할까? 
#     pos=0
#     for x in lost:
#         cnt=0
#         for y in reserve:

#             if abs(x-y) == 1:
#                 cnt+=1
#         print("cnt:", cnt)
#         if cnt > 0:
#             pos += 1
#         print("pos:",pos)
#     real = pos if pos < len(reserve) else len(reserve)
#     print(n - len(lost) + real )
#     return n - len(lost) + real
# #4,5,12,24
                
def solution(n, lost, reserve):
    # 도난당한 학생과 여벌 체육복이 있는 학생의 중복을 제거합니다.
    lost_set = set(lost)
    reserve_set = set(reserve)
    
    # 중복 제거
    real_lost = lost_set - reserve_set
    real_reserve = reserve_set - lost_set
    
    # 빌려주기 과정
    for r in sorted(real_reserve):
        if r-1 in real_lost:
            real_lost.remove(r-1)
        elif r+1 in real_lost:
            real_lost.remove(r+1)
    
    # 체육수업을 들을 수 있는 학생 수 계산
    return n - len(real_lost)

# 예제 테스트
print(solution(5, [4, 5], [3, 4]))  # 결과: 4
print(solution(5, [2, 4], [1, 3, 5]))  # 결과: 5
print(solution(5, [2, 4], [3]))  # 결과: 4
print(solution(3, [3], [1]))  # 결과: 2
