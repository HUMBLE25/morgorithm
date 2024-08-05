import sys 
# 1은 공이 있다는 의미이다.
num={"1":1,"2":0,"3":0}
T = int(input())
for i in range(T):
    # 핵심은 값의 교환이다. 서로의 값을 교환해야 한다.
    # 그전에 dic으로 값을 담아 두자.
    a,b = sys.stdin.readline().rstrip().split()
    temp=num[a]
    num[a]=num[b]
    num[b]=temp
    
for key,val in num.items():
    if val == 1:
        print(key)