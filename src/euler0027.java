import java.util.ArrayList;

/**
 * Created by Holden on 12/19/2016. - COMPLETED
 *
 *
 *
 * Problem 27 - Quadratic Primes
 *
 * Euler discovered the remarkable quadratic formula:
 *
 *                      n^2+n+41
 *
 * It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39.
 * However, when n=40, 40^2+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41, 41^2+41+41
 * is clearly divisible by 41.
 *
 * The incredible formula n^2−79n+1601 was discovered, which produces 80 primes for the consecutive
 * values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.
 *
 * Considering quadratics of the form:
 *
 *      n^2+an+b, where |a|<1000 and |b|≤1000
 *
 *      where |n| is the modulus/absolute value of n
 *      e.g. |11|=11 and |−4|=4
 *
 * Find the product of the coefficients, a and b, for the quadratic expression that produces the
 * maximum number of primes for consecutive values of n, starting with n=0.
 */

public class Prob0027 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = quadraticPrimes(1000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int quadraticPrimes(int bound) {
        int maxPrimes = 1;
        int maxa = 1;
        int maxb = 1;

        for (int a = -(bound-1); a < bound; a++) {
            for (int b = -bound; b <= bound; b++) {
                if (b % 2 == 0) {
                    continue;
                }

                ArrayList<Integer> primes = new ArrayList<>();
                int check = 0;
                long quadCheck = quadratic(a, b, check);

                while (quadCheck > 0 && EulerUtil.isPrime(quadCheck)) {
                    primes.add(check);
                    check++;
                    quadCheck = quadratic(a, b, check);
                }

                if (primes.size() > maxPrimes) {
                    maxPrimes = primes.size();
                    maxa = a;
                    maxb = b;
                }
            }
        }

        return maxa * maxb;
    }

    private static long quadratic(int a, int b, int n) {
        return EulerUtil.pow(n, 2) + (n * a) + b;
    }
}
