n = int(input())
a = [int(x) for x in input().split()]
for i in range(0, n):
	if a[i] % 2 == 0:
		print(a[i])