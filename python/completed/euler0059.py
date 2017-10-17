###
#
# Created by Holden on 7/3/2017
#
#
#
# Problem 59 - XOR Decryption
#
###

from collections import Counter
from functools import reduce
from itertools import chain


file = open("../data/x0059.txt", "r")
encrypted_message = []
for line in file:
    encrypted_message.extend(map(int, line.strip().split(",")))


def xor_encryption():

    # split into three piles to account for three digit key
    first = [encrypted_message[i] for i in range(len(encrypted_message)) if i % 3 == 0]
    second = [encrypted_message[i] for i in range(len(encrypted_message)) if i % 3 == 1]
    third = [encrypted_message[i] for i in range(len(encrypted_message)) if i % 3 == 2]

    # Find most common characters from each pile, which will (likely) be a space
    count_first = Counter(first)
    count_second = Counter(second)
    count_third = Counter(third)
    e_first = count_first.most_common()[0][0]
    e_second = count_second.most_common()[0][0]
    e_third = count_third.most_common()[0][0]

    # encrypt the space to find the three elements of the key
    key_first = encrypt([e_first], ord(" "))[0]
    key_second = encrypt([e_second], ord(" "))[0]
    key_third = encrypt([e_third], ord(" "))[0]

    # use the key to decrypt the three piles
    decrypt_first = encrypt(first, key_first)
    decrypt_second = encrypt(second, key_second)
    decrypt_third = encrypt(third, key_third)

    # make all piles equal length
    if len(decrypt_first) != len(decrypt_second):
        decrypt_second.append(0)
    if len(decrypt_first) != len(decrypt_third):
        decrypt_third.append(0)

    # combine and decrypt the piles
    decrypt_message = list(chain.from_iterable(list(map(lambda x, y, z: [x, y, z], decrypt_first, decrypt_second, decrypt_third))))

    print("".join(list(map(chr, decrypt_message))))

    return sum(decrypt_message)


def encrypt(message, key):
    return list(map(lambda x: x ^ key, message))


print(xor_encryption())
