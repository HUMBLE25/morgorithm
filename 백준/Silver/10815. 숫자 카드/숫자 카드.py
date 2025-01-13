# 해시
import sys
# 입력 처리
N = int(sys.stdin.readline())
SSet = set(map(int, sys.stdin.readline().split()))  # 상근이가 가진 숫자 카드 -> 해시셋
M = int(sys.stdin.readline())
OList = list(map(int, sys.stdin.readline().split()))  # 확인할 숫자 리스트

result = [1 if el in SSet else 0 for el in OList]
print(" ".join(map(str,result)))