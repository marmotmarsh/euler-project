/**
 * Created by Holden on 11/19/2016. - COMPLETED
 *
 * Problem 2 - Even Fibonacci Numbers
 *
 */

public class Prob0002 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = evenFibonacciNumbers(4000000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int evenFibonacciNumbers(int upperBound) {
        int fib1 = 1;
        int fib2 = 2;
        int temp;
        int fibSum = 0;

        while (fib2 < upperBound) {
            if (fib2 % 2 == 0) {
                fibSum += fib2;
            }
            temp = fib2;
            fib2 += fib1;
            fib1 = temp;
        }

        return fibSum;
    }
}
