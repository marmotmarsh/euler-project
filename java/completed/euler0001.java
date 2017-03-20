import lib.EulerTime;

/**
 * Created by Holden on 11/19/2016. - COMPLETED
 *
 * Problem 1 - Multiples of 3 and 5
 *
 */

public class Prob0001 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = multiples35(1000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int multiples35(int upperBound) {
        int sum = 0;

        for (int i = 1; i < upperBound; i++) {
            if (i % 5 == 0) {
                sum += i;
            } else if (i % 3 == 0) {
                sum += i;
            }
        }

        return sum;
    }
}

