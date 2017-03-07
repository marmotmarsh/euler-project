/**
 * Created by Holden on 12/06/2016. - COMPLETED
 *
 *
 *
 * Problem 19 - Counting Sundays
 *
 * You are given the following information, but you may prefer to do some research for yourself.
 *
 *      1 Jan 1900 was a Monday.
 *
 *      Thirty days has September,
 *      April, June and November.
 *      All the rest have thirty-one,
 *      Saving February alone,
 *      Which has twenty-eight, rain or shine.
 *      And on leap years, twenty-nine.
 *
 *      A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 *
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

public class Prob0019 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = countingSundays(1901, 2000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    final static int[] DAYS = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    public static int countingSundays(int beginYear, int endYear) {
        int total = 0;
        int day = 0;       // Monday for Jan 1 1900
        int year = 1900;   // Begin from this year

        // move start to beginYear
        while (year < beginYear) {
            for (int i = 0; i < 12; i++) {
                day = (day + DAYS[i]) % 7;
                if (i == 1) {
                    if ((year % 4 == 0 && !(year % 100 == 0)) || (year % 400 == 0)) {
                        day = (day + 1) % 7;
                    }
                }
            }

            year++;
        }

        // go from beginYear to endYear
        while (year < endYear) {
            for (int i = 0; i < 12; i++) {
                if (day == 0) {
                    total++;
                }

                day = (day + DAYS[i]) % 7;
                if (i == 1) {
                    if ((year % 4 == 0 && !(year % 100 == 0)) || (year % 400 == 0)) {
                        day = (day + 1) % 7;
                    }
                }
            }

            year++;
        }

        return total;
    }
}
