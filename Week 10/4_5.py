n = int(input())
a = [int(x) for x in input().split()]
b = bool()
b = False
for i in range (1, n):
    if (a[i] >=0 and a[i - 1] >= 0 or (a[i] < 0 and a[i - 1] < 0)):
        b = True
if b:
    print("YES")
else:
    print("NO")