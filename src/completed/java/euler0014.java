/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 * Problem 14 - Longest Collatz Sequence
 *
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
