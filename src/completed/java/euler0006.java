/**
 * Created by Holden on 11/20/2016. - COMPLETED
 *
 * Problem 6 - Sum Square Difference
 *
 */

public class Prob0006 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = sumSquareDifference(100);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int sumSquareDifference(int upperBound) {
        long squareofSums = 0;
        for (int i = 1; i <= upperBound; i++) {
            squareofSums += i;
        }
        squareofSums = EulerUtil.pow((int) squareofSums, 2);

        int sumOfSquares = 0;
        for (int i = 1; i <= upperBound; i++) {
            sumOfSquares += EulerUtil.pow(i, 2);
        }

        return (int) (squareofSums - sumOfSquares);
    }
}
