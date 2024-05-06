def solution(n):
    strArr = list(str(n)[::-1])
    return [int(el) for el in strArr]