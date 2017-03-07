/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 * Problem 15 - Lattice Paths
 *
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
