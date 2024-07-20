import sys 
T = int(input())
for i in range(T):
    word = sys.stdin.readline().rstrip()
    length = len(word)
    print(word[0]+word[length-1])