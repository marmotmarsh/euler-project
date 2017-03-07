/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 *
 *
 * Problem 15 - Lattice Paths
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 *
 * How many such routes are there through a 20×20 grid?
 */

public class Prob0015 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = latticePaths(20);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long latticePaths(int dimension) {
        return EulerUtil.combine(2*dimension, dimension);
    }
}
