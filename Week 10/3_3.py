import math
a = int(input())
b = int(input())
for i in range(a, b+1):
	k = int(math.sqrt(i))
	if k*k == i:
		print(i)
