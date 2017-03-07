import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Holden on 11/20/2016. - COMPLETED
 *
 *
 *
 * Problem 7 - 10001st Prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

public class Prob0007 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = nthPrime(10001);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int nthPrime(int n) {
        ArrayList<Integer> primesArray = new ArrayList<>(Arrays.asList(3));
        int i = 3;
        int length = 2;
        boolean isPrime = true;

        while (length < n) {
            i += 2;

            for (int prime: primesArray) {
                if (i % prime == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primesArray.add(i);
                length++;
            } else {
                isPrime = true;
            }
        }

        return primesArray.get(n-2);
    }
}
