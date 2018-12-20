import math
import os
import random
import re
import sys

# Complete the repeatedString function below.
def repeatedString(s, n):
     
    c = s.count("a") 
    d = math.floor(n/len(s))
    e = n % len(s)
    f = s[0:e].count("a")

    return (c * d + f)



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()