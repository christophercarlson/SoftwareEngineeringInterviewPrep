import math
import os
import random
import re
import sys

# Complete the sockMerchant function below.
# N is the number of socks.
# ar is a list of numbers representing colors of the sock.
def sockMerchant(n, ar):
    count=0
    listToSet = set(ar)
    
    for i in listToSet:
        count = count + math.floor(ar.count(i) / 2)
    
    return count




if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    
    n = int(input())
    
    ar = list(map(int, input().rstrip().split()))
    
    result = sockMerchant(n, ar)
    
    fptr.write(str(result) + '\n')
    
    fptr.close()

