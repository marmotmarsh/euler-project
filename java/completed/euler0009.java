import lib.EulerTime;
import lib.EulerUtil;

/**
 * Created by Holden on 11/20/2016. - COMPLETED
 *
 * Problem 9 - Special Pythagorean Triplet
 *
 */

public class Prob0009 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = pythagoreanTriplet(1000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int pythagoreanTriplet(int sum) {
        for (int a = 1; a < sum; a++) {
            for (int b = (a + 1); b < sum; b++) {
                for (int c = (b + 1); c < sum; c++) {
                    if (a + b + c == sum) {
                        if (EulerUtil.pow(a, 2) + EulerUtil.pow(b, 2) == EulerUtil.pow(c, 2)) {
                            return (a * b * c);
                        }
                    }
                }
            }
        }

        return 0;
    }
}