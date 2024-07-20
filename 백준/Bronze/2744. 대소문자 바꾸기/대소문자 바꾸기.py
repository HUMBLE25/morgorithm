# 문자열 입력
word = input()

for el in word:
    num = ord(el)
    # 97보다 같거나 크면 소문자 이므로 32를 뺀다.
    if num >= 97:
        print(chr(num-32),end='')
    # 97보다 작으면 대문자 이므로 32를 더한다.
    else:
        print(chr(num+32),end='')
print('')