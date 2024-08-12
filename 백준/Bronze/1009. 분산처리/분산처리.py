import sys

T = int(input())
# 주어진 a에 따라 나올 수 있는 마지막 자리수 패턴 리스트
patterns = [
    [1],        # 1^n
    [2, 4, 8, 6], # 2^n
    [3, 9, 7, 1], # 3^n
    [4, 6],      # 4^n
    [5],        # 5^n
    [6],        # 6^n
    [7, 9, 3, 1], # 7^n
    [8, 4, 2, 6], # 8^n
    [9, 1],      # 9^n
    [10]        # 10^n
]

for _ in range(T):
    a, b = map(int, sys.stdin.readline().rstrip().split())
    pattern = patterns[a % 10 - 1]
    index = (b % len(pattern)) - 1
    # 0일 경우, 마지막 패턴 요소를 선택해야 하므로 -1 처리
    if index == -1:
        index = len(pattern) - 1
    print(pattern[index])