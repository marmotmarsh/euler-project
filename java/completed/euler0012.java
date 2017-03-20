import lib.EulerTime;
import lib.EulerUtil;
import lib.OccurrenceSet;

import java.util.ArrayList;

/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 * Problem 12 - Highly Divisible Triangular Number
 *
 */

public class Prob0012 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = triangularNumber(500);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int triangularNumber(int upperBound) {
        int triangle = 1;
        int count = 1;
        int divisors = calculateDivisors(triangle);

        while (divisors <= upperBound) {
            count++;
            triangle += count;
            divisors = calculateDivisors(triangle);
        }

        return triangle;
    }

    private static int calculateDivisors(int number) {
        ArrayList<Integer> primes = EulerUtil.primeFactor(number);
        OccurrenceSet<Integer> primeSet = new OccurrenceSet<>();
        for (int prime: primes) {
            primeSet.add(prime);
        }

        int divisors = 1;
        for (int value: primeSet) {
            divisors *= (primeSet.get(value) + 1);
        }

        return divisors;
    }
}
