def solution(n):
    # 삼항 연산자와 리스트 컴프리헨션을 이용하여 리스트를 만든다.
    list = ["수" if i % 2 == 0 else "박"  for i in range(n)]
    # 문자열의 join 매서드를 활용하여 리스트를 문자열로 만든다.
    return ''.join(list)

