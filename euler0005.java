/**
 * Created by Holden on 11/19/2016. - COMPLETED
 *
 *
 *
 * Problem 5 - Smallest Multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

public class Prob0005 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = smallestMultiple(20);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int smallestMultiple(int upperBound) {
        // Construct list of multiples
        OccurrenceSet<Integer> multiples = new OccurrenceSet<Integer>();
        for (int i = 2; i <= upperBound; i++) {
            multiples.unionAdd(new OccurrenceSet<Integer>(EulerUtil.primeFactor(i)));
        }

        int product = 1;
        for (Integer i: multiples) {
            product *= EulerUtil.pow(i, multiples.get(i));
        }

        return product;
    }
}
