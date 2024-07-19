import sys
N,X =  map(int, sys.stdin.readline().split())
list = map(int, sys.stdin.readline().split())
for el in list:
    if el < X:
        print(el,end=" ")
print()