def KMPSearch(pat,txt):
    M = len(pat)
    N = len(txt)

    lps = [0]*M
    j = 0
    computeLPSArray(pat, M, lps)

    i = 0
    while i < N:
        if pat[j] == txt[i]:
            i += 1
            j += 1
        if j == M:
            print(str(i-j+1))
            j = lps[j-1]
            break
        
        elif i < N and pat[j] != txt[i]:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

def computeLPSArray(pat, M, lps):
    len = 0
    lps[0]
    i=1
    
    while i < M:
        if pat[i] == pat[len]:
            len += 1
            lps[i] = len
            i += 1
        else:
            if len != 0:
                len = lps[len-1]
            else:
                lps[i] = 0
                i += 1

pattern = input()
txt = ''
for i in range(1,int(pattern)+1):
    txt += str(i)
KMPSearch(pattern,txt)