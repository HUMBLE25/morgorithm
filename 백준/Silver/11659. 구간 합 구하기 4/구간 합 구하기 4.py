import sys
N, M = map(int, sys.stdin.readline().split()) # N, M 입력
nums = list(map(int, sys.stdin.readline().split())) # 숫자 입력

# 누적 합 기법
# 미리 모두 더해두는 방식을 사용한다. 
# 미리 모두 더한후 인덱스에 맞추어 이들을 빼면 된다. 
# [5, 9, 12, 14, 15]
# 1 3 인 경우 3번째까지 더한 12를 선택하면 된다.
# 2 4 인 경우 14 - 5 = 9가 되어야 한다.
# 5 5인 경우 15 -14 = 1가 되어야 한다. 
sum = [0]
for x in range(N):
    sum.append(nums[x] + sum[x])
# print(sum)

for x in range(M):
    i,j = map(int, sys.stdin.readline().split()) # i, j 입력
    print(sum[j]-sum[i-1])