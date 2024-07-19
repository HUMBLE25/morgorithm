import sys
list =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
submitted_list = []
for el in range(28):
    a= int(sys.stdin.readline())
    submitted_list.append(a)
for el in list:
    if el not in submitted_list:
        print(el)