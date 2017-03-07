import java.util.ArrayList;

/**
 * Created by Holden on 12/06/2016. - COMPLETED
 *
 * Problem 21 - Amicable Numbers
 *
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
