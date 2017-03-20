import lib.EulerTime;

/**
 * Created by Holden on 11/20/2016. - COMPLETED
 *
 * Problem 8 - Largest Product in a Series
 *
 */

public class Prob0008 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = largestProduct(13);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long largestProduct(int range) {
        char[] charArray = NUMBER.toCharArray();
        int[] numberArray = new int[1000];
        for (int i = 0; i < 1000; i++) {
            numberArray[i] = Character.getNumericValue(charArray[i]);
        }

        long largest = 0;

        for (int i = 0; i <= (1000 - range); i++) {
            long compare = 1;
            for (int j = 0; j < range; j++) {
                compare *= numberArray[i+j];
            }

            if (compare > largest) {
                largest = compare;
            }
        }

        return largest;
    }

    final static String NUMBER = "73167176531330624919225119674426574742355349194934" +
            "96983520312774506326239578318016984801869478851843" +
            "85861560789112949495459501737958331952853208805511" +
            "12540698747158523863050715693290963295227443043557" +
            "66896648950445244523161731856403098711121722383113" +
            "62229893423380308135336276614282806444486645238749" +
            "30358907296290491560440772390713810515859307960866" +
            "70172427121883998797908792274921901699720888093776" +
            "65727333001053367881220235421809751254540594752243" +
            "52584907711670556013604839586446706324415722155397" +
            "53697817977846174064955149290862569321978468622482" +
            "83972241375657056057490261407972968652414535100474" +
            "82166370484403199890008895243450658541227588666881" +
            "16427171479924442928230863465674813919123162824586" +
            "17866458359124566529476545682848912883142607690042" +
            "24219022671055626321111109370544217506941658960408" +
            "07198403850962455444362981230987879927244284909188" +
            "84580156166097919133875499200524063689912560717606" +
            "05886116467109405077541002256983155200055935729725" +
            "71636269561882670428252483600823257530420752963450";
}
