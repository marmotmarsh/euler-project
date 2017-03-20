import lib.EulerTime;
import lib.EulerUtil;

import java.util.ArrayList;

/**
 * Created by Holden on 12/8/2016. - COMPLETED
 *
 * Problem 23 - Non-Abundant Sums
 *
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
