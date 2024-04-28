import math
import numpy as np
from collections import defaultdict

n = int(input())
items = []

for _ in range(n):
    x, y = map(int, input().split())
    items.append([x, y])

for i in range(n):
    longest = 0
    longest_num = 0

    for j in range(n):
        if i == j:
            continue

        p = np.array(items[i])
        q = np.array(items[j])
        dist = np.linalg.norm(p - q)

        if dist > longest:
            longest = dist
            longest_num = j + 1

    print(longest_num)
