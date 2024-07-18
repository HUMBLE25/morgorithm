def solution(myString, pat):
    # 문자열 검색
    # pat로 끝나는 문자 중에 가장 긴것 => 처음 발견하는 것이 아니라 마지막에 발견 하는것
    # reverse를 이용하면 되지 않을까?
    # reverse시키고 처음 보는 문자열을 택한다. 다시 리버스 시킨다.
    # 비효율적일 것 같다. 
    print(myString, pat)
    print(len(myString)-1)
    print("real index:",myString.find(pat))
    print("reversed:",myString[::-1].find(pat[::-1]))
    # 원본 문자열에서의 인덱스와 비교하면 된다.
    # pat의 길이도 반영해야 한다.
    idx = len(myString)-myString[::-1].find(pat[::-1])
    print(idx)
    return myString[:idx]
    