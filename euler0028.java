/**
 * Created by Holden on 12/19/2016. - COMPLETED
 *
 *
 *
 * Problem 28 - Number Spiral Diagonals
 *
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 *              21 22 23 24 25
 *              20  7  8  9 10
 *              19  6  1  2 11
 *              18  5  4  3 12
 *              17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

public class Prob0028 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = quadraticPrimes(1001);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int quadraticPrimes(int dimension) {
        int sum = 1;
        int currentInteger = 1;
        int currentDimension = 1;

        while (currentDimension < dimension) {
            for (int i = 0; i < 4; i++) {
                currentInteger += (currentDimension + 1);
                sum += currentInteger;
            }

            currentDimension += 2;
        }

        return sum;
    }

}
