name = input()
# 맨 앞 글자와 하이픈 뒤 글자를 모아오면 된다.
# 첫번째 글자는 맨 처음 인덱스이니 가져오면 될것이다
# 하이픈 뒷 글자는 어떻게 가져오지?
# 정규표현식을 사용한다?
# 하이픈일 경우 뒷 글자를 더한다.
answer = name[0]
for i,key in enumerate(name):
    if key == '-':
        answer += name[i+1]
print(answer)