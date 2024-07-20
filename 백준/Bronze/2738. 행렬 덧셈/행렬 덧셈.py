import sys
# 행렬 크기 입력
rows,cols = map(int,input().split())
# A초기화

A = [[0 for _ in range(cols)] for _ in range(rows)]
# B 초기화
B = [[0 for _ in range(cols)] for _ in range(rows)]
# 행렬 A입력
for row in range(rows):
    list = map(int, sys.stdin.readline().split())
    for col,el in enumerate(list):
        A[row][col]=el
# 행렬 B입력
for row in range(rows):
    list = map(int, sys.stdin.readline().split())
    for col,el in enumerate(list):
        B[row][col]=el

# rows 반복, row번째 행 접근
for i in range(rows):
    # cols 반복, col번째 열 접근
    for j in range(cols):
        print(A[i][j] + B[i][j],end=" ")
    print("")
