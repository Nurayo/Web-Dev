a=str(input())
b=int(input())

if(len(a)!=4):sym=False
elif(a[0:2] == a[::-1][0:2]): sym=True
else:sym=False

if(b==1 and sym == True): print("YES")
elif(b!=1 and sym == False): print("YES")
else: print("NO")