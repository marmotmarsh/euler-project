import lib.EulerTime;

/**
 * Created by Holden on 11/19/2016. - COMPLETED
 *
 * Problem 4 - Largest Palindrome Product
 *
 */

public class Prob0004 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = largestPalindromeProduct(3);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int largestPalindromeProduct(int integerLength) {
        int productMin = (int) Math.pow(10, integerLength - 1);
        int productMax = (int) (Math.pow(10, integerLength) - 1);
        int palindrome = 0;

        for (int factor1 = productMin; factor1 <= productMax; factor1++) {
            for (int factor2 = factor1; factor2 <= productMax; factor2++) {
                int product = factor1 * factor2;
                String productString = Integer.toString(product);
                String reverse = new StringBuilder(productString).reverse().toString();

                //System.out.print(productString);
                //System.out.print(new StringBuilder(productString).reverse().toString());

                if (productString.compareTo(reverse) == 0) {
                    if (product > palindrome) {
                        palindrome = product;
                    }
                }
            }
        }

        return palindrome;
    }
}