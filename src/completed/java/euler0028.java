/**
 * Created by Holden on 12/19/2016. - COMPLETED
 *
 * Problem 28 - Number Spiral Diagonals
 *
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
