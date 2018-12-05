# A valley is a sequence of consecutive steps below sea level, starting 
# with a step down from sea level and ending with a step up to sea level.

import math
import os
import random
import re
import sys

# Complete the countingValleys function below.
def countingValleys(n, s):

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    result = countingValleys(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()