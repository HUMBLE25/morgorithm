def solution(price, money, count):
    total = (price + price*count)/2*count
    margin = total - money
    return margin if margin > 0 else  0