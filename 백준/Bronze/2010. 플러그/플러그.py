import sys
N = int(input())
answer = 1
for i in range(N):
    plug = int(sys.stdin.readline().rstrip())
    answer = answer - 1 + plug
print(answer)