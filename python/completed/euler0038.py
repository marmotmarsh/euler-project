###
#
# Created by Holden on 3/20/2017
#
# COMPLETED on 3/20/2017
#
# Problem 38 - Pandigital Multiples
#
###



def pandigital_multiples():

    for i in range(3334, 10000):
        pan = str(i) + str(i * 2)

        if len(set(pan)) == 9:
            if "0" not in pan:
                print(int(pan))
                largest = i

    return largest


print(pandigital_multiples())
