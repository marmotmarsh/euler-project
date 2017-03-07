import java.math.BigInteger;

/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 *
 *
 * Problem 16 - Power Digit Sum
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */

public class Prob0016 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = powerDigitSum(1000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long powerDigitSum(int power) {
        BigInteger total = BigInteger.valueOf(1);
        BigInteger two = BigInteger.valueOf(2);
        for (int i = 0; i < power; i++) {
            total = total.multiply(two);
        }

        int digitSum = 0;
        char[] digits = total.toString().toCharArray();
        for (char i: digits) {
            digitSum += Character.getNumericValue(i);
        }

        return digitSum;
    }
}
