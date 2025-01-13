# 이진 검색
from typing import Any, Sequence
import sys
def bin_search(a: Sequence, key: Any) -> int:
    pl = 0
    pr = len(a) - 1

    while True:
        pc = (pl + pr) // 2 # 중앙 원소의 인덱스
        if a[pc] == key:
            return 1 # 검색 성공
        elif a[pc] < key: 
            pl = pc + 1 # 검색 범위를 뒤쪽 절반으로 좁힘
        else:
            pr = pc - 1 # 검색 범위를 앞쪽 발반으로 좁힘
        if pl > pr: 
            return 0 # 검색 실패
        

N = int(sys.stdin.readline())
SList = sorted(map(int, sys.stdin.readline().split()))
M = int(sys.stdin.readline())
OList = list(map(int, sys.stdin.readline().split()))

result = []
for el in OList:
    print(bin_search(SList, el), end=' ')
print()