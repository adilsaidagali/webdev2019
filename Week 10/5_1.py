#import math
#def mini(a, b, c, d):
 #   return (min(a, min(b, min(c, d))))

#a = int(input())
#b = int(input())
#c = int(input())
#d = int(input())

#print(int(mini(a, b, c, d)))

def mini(s):
    return min(s)

if __name__ == '__main__':
    s = input().split(' ')
    print(mini(s))