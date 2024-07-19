numbers = input()
result = 0
for num in numbers.split():
    result += int(num)**2
print(result%10)