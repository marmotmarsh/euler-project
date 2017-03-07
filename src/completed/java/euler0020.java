import java.math.BigInteger;

/**
 * Created by Holden on 12/06/2016. - COMPLETED
 *
 * Problem 20 - Factorial Digit Sum
 *
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
