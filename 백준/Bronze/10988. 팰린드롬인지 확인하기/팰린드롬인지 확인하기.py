N = input()
# 앞으로 읽을때와 거꾸로 읽을 때 같다는 것은 어떤 의미 일까
# 문자를 뒤집은 후 비교하면 알 수 있지 않을까
reverse_N= N[::-1]
if N==reverse_N:
    print(1)
else:
    print(0)