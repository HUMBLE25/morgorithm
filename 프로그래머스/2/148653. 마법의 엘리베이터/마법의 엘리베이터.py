def solution(storey):
    answer = 0
    rem = 0
    value = 0
    while(storey !=0) :
        rem = storey % 10
        value = storey//10
        if (rem > 5) :
            answer += 10 - rem 
            value +=1
        elif(rem == 5):
            answer += rem
            if(value%10 >= 5) : value += 1
        else:
            answer += rem 
        
        storey = value
    
    return answer