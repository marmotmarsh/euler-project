###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 7 - 10,001st Prime
#
###

def find_prime(number):
    prime_list = [2, 3]
    i = 3
    term_is_prime = True
    
    while len(prime_list) < number:
        i += 2
        
        for term in prime_list:
            if i % term == 0:
                term_is_prime = False
                break
                
        if term_is_prime:
            prime_list.append(i)
        else:
            term_is_prime = True
            
    return prime_list[-1]