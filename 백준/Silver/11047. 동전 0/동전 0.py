import sys

# 입력 처리
N, K = map(int, sys.stdin.readline().split())
coins = []
for _ in range(N):
    coins.append(int(sys.stdin.readline()))

# 내림차순 정렬
coins.sort(reverse=True)

# 그리디 알고리즘으로 최소 동전 개수 계산
result = 0
for coin in coins:
    if K == 0:  # 금액을 모두 채우면 종료
        break
    result += K // coin  # 해당 동전으로 필요한 개수
    K %= coin  # 나머지 금액 계산

print(result)
