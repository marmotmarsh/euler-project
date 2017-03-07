import java.util.ArrayList;

/**
 * Created by Holden on 12/8/2016. - COMPLETED
 *
 *
 *
 * Problem 23 - Non-Abundant Sums
 *
 * A perfect number is a number for which the sum of its proper divisors is exactly equal
 * to the number. For example, the sum of the proper divisors of 28 would be
 * 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less than n and
 * it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number
 * that can be written as the sum of two abundant numbers is 24. By mathematical analysis,
 * it can be shown that all integers greater than 28123 can be written as the sum of
 * two abundant numbers. However, this upper limit cannot be reduced any further by analysis
 * even though it is known that the greatest number that cannot be expressed as the sum of
 * two abundant numbers is less than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

public class Prob0023 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = nonAbundantSums(28123);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int nonAbundantSums(int bound) {
        ArrayList<Integer> abundantSums = new ArrayList<>();
        for (int i = 2; i <= bound; i++) {
            ArrayList<Integer> divisors = EulerUtil.properDivisors(i);
            int sum = 0;
            for (int divisor: divisors) {
                sum+= divisor;
            }

            if (sum > i) {
                abundantSums.add(i);
            }
        }

        int[] nonAbundantSums = new int[bound+1];
        for (int i = 0; i <= bound; i++) {
            nonAbundantSums[i] = i;
        }

        for (int i: abundantSums) {
            for (int j: abundantSums) {
                if (i + j <= bound) {
                    nonAbundantSums[i+j] = 0;
                }
            }
        }

        int nonAbundantSum = 0;
        for (int i: nonAbundantSums) {
            nonAbundantSum += i;
        }

        return nonAbundantSum;
    }
}
