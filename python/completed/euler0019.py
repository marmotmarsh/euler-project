###
#
# Created by Holden on 12/18/2015
#
# SOLVED on 12/18/2015
#
# Problem 19 - Counting Sundays
#
###

import datetime

def counting_sundays(start, end):
    count = 0
    
    for year in range(start, end + 1):
        for month in range(1, 13):
            date = datetime.date(year, month, 1)
            if date.weekday() == 6:
                count += 1
                
    return count