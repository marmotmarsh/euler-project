import lib.EulerTime;

import java.util.HashMap;

/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 * Problem 17 - Number Letter Counts
 *
 */

public class Prob0017 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = numberLetterCounts(1000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int numberLetterCounts(int upperBound) {
        HashMap<Integer, Integer> digits = letters();
        int total = 0;

        for (int i = 1; i <= upperBound; i++) {
            // i >= 1000
            if (i >= 1000) {
                total += digits.get(1000);
                total += digits.get(1);
                continue;
            }

            // 1000 > i >= 100
            if (i%1000 >= 100) {
                total += digits.get(100);
                total += digits.get(i/100);
                if (i%100 == 0) {
                    continue;
                }
                total += 3; // and
            }

            // 100 > i >= 20;
            if (i%100 >= 20) {
                total += digits.get(((i%100)/10)*10);
            }

            // 20 > i >= 10
            if (i%100 >= 10 && i%100 < 20) {
                total += digits.get(i%100);
                continue;
            }

            // 10 > i
            if(i%10 != 0) {
                total += digits.get(i%10);
            }
        }

        return total;
    }

    public static HashMap<Integer, Integer> letters() {
        HashMap<Integer, Integer> digits = new HashMap<>();
        digits.put(1, 3);
        digits.put(2, 3);
        digits.put(3, 5);
        digits.put(4, 4);
        digits.put(5, 4);
        digits.put(6, 3);
        digits.put(7, 5);
        digits.put(8, 5);
        digits.put(9, 4);
        digits.put(10, 3);
        digits.put(11, 6);
        digits.put(12, 6);
        digits.put(13, 8);
        digits.put(14, 8);
        digits.put(15, 7);
        digits.put(16, 7);
        digits.put(17, 9);
        digits.put(18, 8);
        digits.put(19, 8);
        digits.put(20, 6);
        digits.put(30, 6);
        digits.put(40, 5);
        digits.put(50, 5);
        digits.put(60, 5);
        digits.put(70, 7);
        digits.put(80, 6);
        digits.put(90, 6);
        digits.put(100, 7); // hundred
        digits.put(1000, 8); // thousand

        return digits;
    }
}
