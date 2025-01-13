import sys
# 입력 처리
n, m = map(int, sys.stdin.readline().split())

arr = []
for i in range(n):
    arr.append(list(map(int, sys.stdin.readline().split())))

# 2차원 누적 합 배열 생성
dp = [[0] * (n + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    for j in range(1, n + 1):
        dp[i][j] = dp[i][j-1] + dp[i-1][j] - dp[i-1][j-1] + arr[i-1][j-1]

# 질의 처리
for _ in range(m):
    x1, y1, x2, y2 = map(int, sys.stdin.readline().split())
    result = dp[x2][y2] - dp[x2][y1-1] - dp[x1-1][y2] + dp[x1-1][y1-1]
    print(result)