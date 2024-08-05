import sys

while(True):
    input = sys.stdin.readline().rstrip()
    if input == "0":
        break
    result = 1
    nums = list(map(int,input.split()))
    for i,el in enumerate(nums[1:]):
        if i%2 == 0:
            result *= el
        else:
            result -= el
    print(result)