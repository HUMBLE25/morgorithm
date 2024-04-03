def solution(strlist):
    # 문자열 배열을 입력
    # 문자열 배열의 원소의 길이를 담은 배열을 반환해야 한다.

    result = map(lambda x: len(x), strlist)
    return list(result)
    # return [len(str) for str in strlist]