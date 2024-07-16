def solution(nums):
    # 같은것만 골랐을 경우 하나로 친다... 당연하잖아 
    # 예외 처리가 필요하다.
    # 가장 많은 종류의 폰켓몬을 선택하는 방법...?? 종류 번호의 갯수를 구하라?
    # 중복 되는 경우를 처리 해야 할 것 같다.
    # [3,1,2,3] 길이가 4이므로 2개를 선택해야한다. 중복된 것들은 없앤다.
    # [1,2,3]이다. 길이가 2보다 크므로 선택할 수 있는 폰켓몬의 수의 최댓값은 2이다.
    # [3,3,3,2,2,4] 길이가 6이므로 6//2 == 3으로 3개를 선택해야 한다.
    # 중복된 것을 모두 지운다. [3,2,4]길이가 3이다. 3보다 같으므로 폰켓몬의 수의 최댓값은 2이다.
    # [3,3,3,2,2,2]길이가 6이다. 3개를 선택해야한다. 중복된 것을 모두 지움 [3,2]
    # 2는 3보다 작다. 선택할 수 있는 최댓값은 2이다.
    # 중복을 제거하는 것이 중요하다.
    
    original_len = len(nums)//2
    print(original_len)
    removed_nums = list(set(nums))
    removed_len = len(removed_nums)
    print(removed_len)
    return original_len if original_len < removed_len else removed_len
    