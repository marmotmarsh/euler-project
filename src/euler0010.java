/**
 * Created by Holden on 11/20/2016. - COMPLETED
 *
 *
 *
 * Problem 10 - Summation of Primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

 public class Prob0010 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = summationPrimes(2000000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long summationPrimes(int upperBound) {
        boolean isPrime = true;
        long sum = 5;

        for (int i = 5; i < upperBound; i += 2) {
            for (int j = 3; j <= Math.sqrt(i); j+= 2) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                sum += i;
            } else {
                isPrime = true;
            }
        }

        return sum;
    }
}
