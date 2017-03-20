import lib.EulerTime;
import lib.EulerUtil;

import java.util.Arrays;

/**
 * Created by Holden on 12/8/2016. - COMPLETED
 *
 * Problem 24 - Lexicographic Permutations
 *
 */

public class Prob0024 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = lexicographicPermutations("012", 6);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long lexicographicPermutations(String digits, int bound, int index) {
        // currently returns the correct number, but with the last two digits switched

        int factorial = EulerUtil.fact(digits.length() - 1);
        if (factorial == bound) {
            return Integer.parseInt(digits);
        } else if (factorial < bound) {
            char newStart = digits.charAt(index);
            char[] rest = (digits.substring(0, index) + digits.substring(index+1)).toCharArray();
            Arrays.sort(rest);
            String newDigits = newStart + new String(rest);
            return lexicographicPermutations(newDigits, bound-factorial, index+1);
        } else {
            return (Character.getNumericValue(digits.charAt(0)) * EulerUtil.pow(10, digits.length()-1)) +
                    lexicographicPermutations(digits.substring(1), bound, 1);
        }
    }

    public static long lexicographicPermutations(String digits, int bound) {
        return lexicographicPermutations(digits, bound, 1);
    }
}
