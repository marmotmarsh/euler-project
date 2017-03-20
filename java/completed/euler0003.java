import lib.EulerTime;

/**
 * Created by Holden on 11/19/2016. - COMPLETED
 *
 * Problem 3 - Largest Prime Factor
 *
 */

public class Prob0003 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = largestPrimeFactor(600851475143L);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long largestPrimeFactor(long value) {
        for (int i = 2; i <= Math.sqrt(value); i++) {
            if (value % i == 0) {
                long factor = value / i;
                if (factor == 1) {
                    return value;
                } else {
                    return largestPrimeFactor(factor);
                }
            }
        }

        return value;
    }
}