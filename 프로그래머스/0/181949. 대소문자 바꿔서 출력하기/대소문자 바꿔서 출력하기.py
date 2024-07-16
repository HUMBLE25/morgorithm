str = input()
# 아스키 코드값을 이용한다.
# ord, chr
# 'a' -97, 'A' - 65 ... 32 차이
answer=''
for el in str:
    if(ord(el) < 97):
        # print(el,":", chr(ord(el)+32))
        answer+=chr(ord(el)+32)
    else:
        # print(el,":", chr(ord(el)-32))
        answer+=chr(ord(el)-32)
print(answer)
# print(ord(str[0]),ord('A'))
