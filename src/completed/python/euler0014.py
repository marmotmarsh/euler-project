###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 1/6/2016
#
# Problem 14 - Longest Collatz Sequence
#
###

def sequence_length(start):
    seq_length = 1
    
    while start > 1:
        if start % 2 != 0:
            start = (start * 3) + 1
            seq_length += 1
        else:
            start = start // 2
            seq_length += 1
    
    return seq_length

def longest_collatz_sequence(upper):
    long_lenth = 0
    init = 0
    
    for i in range (1, upper):
        seq_length = sequence_length(i)
        
        if seq_length > long_lenth:
            long_lenth = seq_length
            init = i
    
    return init