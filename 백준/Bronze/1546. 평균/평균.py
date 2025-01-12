# 입력값이 a, b, c라 하고 b가 최댓값이라면 a/b*100, b/b*100, c/b*100 이 된다.
# 이들의 평균은 (a+b+c)/b*100/3이다. 이를 일반화 하면 아래와 같다.
# (모든 점수들의 합)/(최댓값)/*100/(점수의 수, 리스트의 길이)
import sys
N = int(sys.stdin.readline())
list = list(map(int, sys.stdin.readline().split()))
max = 0
sum = 0
for el in list:
    if max < el :
        max = el
    sum += el
print(sum*100/max/N)