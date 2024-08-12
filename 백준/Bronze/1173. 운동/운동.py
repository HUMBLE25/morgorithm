N,m,M,T,R = map(int,input().split())
# 횟수
cnt = 0
#현재 심박수
heart = m
total=0
while(cnt != N):
#    print("heart:",heart,"M:",M,"cnt:",cnt,"N:",N)
   # 운동을 할 수 없는 경우
    # 최대 심박수와 최소 심박수의 차이와 비교했을때 T가 크고, T가 R보다 작거나 같다면 운동을 할 수 없다.
   if m+T>M:
    total=-1
    break
   # 현재 심박수에서 운동후 심박수를 더했을때 최대 심박수보다 크다면 뺀다.(휴식)
   if (heart + T > M) :
        if(heart - R < m):
            heart = m
        else:
            heart = heart - R
        total+=1
   # 현재 심박수에서 운동후 심박수를 더했을때 최대 심박수보다 작거나 같다면 더한다.(운동)
   else:
        heart = heart + T
        cnt+=1
        total+=1
print(total)
