from functools import cmp_to_key


def compare(a, b):
    # 앞의 피연산자가 뒤의 피연산자보다 크면 양의 정수를 반환 => 양수는 자리를 안 바꾼다, 음수는 자리를 바꾼다
    num1 = int(str(a)+str(b))
    num2 = int(str(b)+str(a))
    return num2 - num1


def solution(numbers):
    sorted_n = sorted(numbers, key=cmp_to_key(compare))
    answer=''
    for el in sorted_n:
        answer += str(el)
    return '0' if sorted_n[0] == 0 else answer
