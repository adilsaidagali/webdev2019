import math
a = int(input())
b = int(input())
if (a > 0):
    print(int(((a * b) % 109)))
else:
    print(int((109 - (math.fabs(a * b) % 109)) % 109))