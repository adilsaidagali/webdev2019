def solve(a, b):
    ans = float()
    ans = 1
    for i in range (0, b):
        ans *= a
    return ans

a = float(input())
b = int(input())
print(solve(a, b))