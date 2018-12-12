
import math
import os
import random
import re
import sys

# Complete the jumpingOnClouds function below.

    
def jumpingOnClouds(c):
     

    jumps = 0
    end = len(c) -1
    currentCloud = 0
    
 
        
    while currentCloud < end:
        
        if currentCloud + 2 < end + 1  and c[currentCloud + 2] == 0:
            
            currentCloud += 2
            jumps += 1
        
        elif currentCloud + 1 < end + 1  and c[currentCloud + 1] == 0:
            
            currentCloud +=  1
            jumps += 1
        
        
        
    return jumps

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c)

    fptr.write(str(result) + '\n')

    fptr.close()