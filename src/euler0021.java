import java.util.ArrayList;

/**
 * Created by Holden on 12/06/2016. - COMPLETED
 *
 *
 *
 * Problem 21 - Amicable Numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which
 * divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each
 * of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
 * therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10000.
 */

public class Prob0021 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = amicableNumbers(10000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long amicableNumbers(int number) {
        int[] sumsArray = new int[number+1];

        for (int i = 2; i < number; i++) {
            ArrayList<Integer> properDivisors = EulerUtil.properDivisors(i);
            int sumDivisors = 0;
            for (int j: properDivisors) {
                sumDivisors += j;
            }

            sumsArray[i] = sumDivisors;
        }

        long sum = 0;

        for (int i = 2; i <= number; i++) {
            if ((sumsArray[i] < number) && (i == sumsArray[sumsArray[i]]) && (sumsArray[i] != i)) {
                sum += i;
            }
        }

        return sum;
    }
}
