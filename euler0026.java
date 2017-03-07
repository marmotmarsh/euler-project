/**
 * Created by Holden on 12/10/2016.
 *
 *
 *
 * Problem 26 - Reciprocal Cycles
 *
 * A unit fraction contains 1 in the numerator. The decimal representation of the unit
 * fractions with denominators 2 to 10 are given:
 *
 *      1/2	    = 	0.5
 *      1/3	    = 	0.(3)
 *      1/4	    = 	0.25
 *      1/5	    = 	0.2
 *      1/6	    = 	0.1(6)
 *      1/7	    = 	0.(142857)
 *      1/8	    = 	0.125
 *      1/9	    = 	0.(1)
 *      1/10	= 	0.1
 *
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen
 * that 1/7 has a 6-digit recurring cycle.
 *
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in
 * its decimal fraction part.
 */

public class Prob0026 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = reciprocalCycles(10);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int reciprocalCycles(int denominator) {
        for (int i = 2; i < denominator; i++) {
            double decimal = 1.0 / i;
            String pattern = EulerUtil.readPattern(Double.toString(decimal).substring(2));
            System.out.println(pattern);
        }

        return 1;
    }
}
