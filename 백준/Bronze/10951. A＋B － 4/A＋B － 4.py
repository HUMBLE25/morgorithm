import sys
# 입력이 없을때까지 반복
while(True):
    # rstrip()을 이용하여 \n 제거
    input = sys.stdin.readline().rstrip()
    # 공백을 입력하면 반복 중단
    if input == "":
        break
    A,B = map(int, input.split())
    print(A+B)