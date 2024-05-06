def solution(a, b, n):
    get=[]
    value = 0
    while n>=a:
        value = n//a*b
        get.append(value)
        n= value + n%a
    return sum(get)
    