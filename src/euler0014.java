/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 *
 *
 * Problem 14 - Longest Collatz Sequence
 *
 * The following iterative sequence is defined for the set of positive integers:
 *
 *      n → n/2 (n is even)
 *      n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 *              13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

public class Prob0014 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = longestCollatzSequence(1000000);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int longestCollatzSequence(int upperBound) {
        int longest = 0;
        int number = 0;
        int length;

        for (int i = 1; i < upperBound; i++) {
            length = sequenceLength(i);
            if (length > longest) {
                longest = length;
                number = i;
            }
        }

        return number;
    }

    private static int sequenceLength(long start) {
        int length = 1;

        while (start > 1) {
            if (start % 2 != 0) {
                start = (start * 3) + 1;
                length++;
            } else {
                start /= 2;
                length++;
            }
        }

        return length;
    }
}
