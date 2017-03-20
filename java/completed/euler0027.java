import lib.EulerTime;
import lib.EulerUtil;

import java.util.ArrayList;

/**
 * Created by Holden on 12/19/2016. - COMPLETED
 *
 * Problem 27 - Quadratic Primes
 *
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
