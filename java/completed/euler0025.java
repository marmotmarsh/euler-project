import lib.EulerTime;

import java.math.BigInteger;

/**
 * Created by Holden on 12/10/2016. - COMPLETED
 *
 * Problem 25 - 1000-Digit Fibonacci Number
 *
 */

public class Prob0025 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = nDigitFibonacciNumber(1000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int nDigitFibonacciNumber(int n) {
        BigInteger f1 = BigInteger.valueOf(1);
        BigInteger f2 = BigInteger.valueOf(1);
        BigInteger temp;
        BigInteger fibonacci = f1.add(f2);
        int count = 3;

        while (fibonacci.toString().length() != n) {
            temp = fibonacci;
            fibonacci = fibonacci.add(f2);
            f2 = temp;
            count++;
        }
        return count;
    }
}
