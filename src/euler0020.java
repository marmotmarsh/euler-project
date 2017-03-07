import java.math.BigInteger;

/**
 * Created by Holden on 12/06/2016. - COMPLETED
 *
 *
 *
 * Problem 20 - Factorial Digit Sum
 *
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */

public class Prob0020 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = factorialDigitSum(100);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int factorialDigitSum(int number) {
        BigInteger factorial = EulerUtil.fact(BigInteger.valueOf(number));

        String factorialString = factorial.toString();
        int sum = 0;

        for (char c: factorialString.toCharArray()) {
            sum += Character.getNumericValue(c);
        }

        return sum;
    }
}
