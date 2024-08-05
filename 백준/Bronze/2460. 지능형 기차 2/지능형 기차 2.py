import sys
train=[0]
while(True):
    # rstrip()을 이용하여 \n 제거
    input = sys.stdin.readline().rstrip()
    # 공백을 입력하면 반복 중단
    if input == "":
        break
    a,b = list(map(int,input.split()))

    train.append(train[len(train)-1] + b - a)
print(max(train))