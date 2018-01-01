###
#
# Created by Holden on 12/31/2017
#
# COMPLETED on 1/1/2018
#
# Problem 79 - Passcode Derivation
#
###

from collections import deque
from operator import itemgetter

FILE = open("../data/x0079.txt", "r")
ATTEMPTS = set()

for line in FILE:
    ATTEMPTS.add(line.strip())


def get_links(attempts):
    links = {str(x): set() for x in range(10)}

    for key in attempts:
        for i in range(2):
            temp = key[i + 1]
            links[key[i]].add(temp)

    to_remove = []
    for k in links.keys():
        if not bool(links[k]):
            to_remove.append(k)

    for j in to_remove:
        links.pop(j)

    return links


# With help from http://alexmic.net/password-derivation-project-euler/
def passcode_derivation():
    links = get_links(ATTEMPTS)
    shortest_codes = []
    number_universe = set()
    for attempt in ATTEMPTS:
        for i in attempt:
            number_universe.add(i)

    for start in links:
        queue = deque([(start, [start])])
        while queue:
            curr, path = queue.popleft()
            neighbours = links.get(curr, [])
            for neighbour in neighbours:
                new_path = path + [neighbour]
                if not number_universe - set(new_path):
                    shortest_codes.append((len(new_path), new_path))
                    break
                queue.append((neighbour, new_path))

    return "".join(sorted(shortest_codes, key=itemgetter(0))[0][1]) or ''


print(passcode_derivation())
