###
#
# Created by Holden on 12/18/2015
#
# SOLVED on 12/18/2015
#
# Problem 22 - Names Scores
#
###

def names_scores(afile):
    name_file = open(afile, "r")

    for row in name_file:
        name_list = row

    name_list = name_list.split(",")
    name_list.sort()

    final_score = 0
    
    for i in range(len(name_list)):
        name_score = 0
        
        for ch in name_list[i]:
            if ch.isalpha():
                name_score += (ord(ch.upper()) - 64)
        
        final_score += (name_score * (i + 1))
        
    return final_score
