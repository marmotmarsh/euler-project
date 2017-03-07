import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Set;

/**
 * Created by Holden on 11/19/2016.
 */
public class EulerUtil {
    public static ArrayList<Integer> factor(int value) {
        ArrayList<Integer> factorArray = new ArrayList<>();

        for (int i = 2; i <= value; i++) {
            if (value % i == 0) {
                factorArray.add(i);
            }
        }

        return factorArray;
    }

    public static ArrayList<Integer> properDivisors(int value) {
        ArrayList<Integer> factorArray = new ArrayList<>();

        for (int i = 1; i <= value / 2; i++) {
            if (value % i == 0) {
                factorArray.add(i);
            }
        }

        return factorArray;
    }

    public static ArrayList<Integer> primeFactor(int value) {
        ArrayList<Integer> factorArray = new ArrayList<>();

        for (int i = 2; i <= value; i++) {
            while (value % i == 0) {
                factorArray.add(i);
                value /= i;
            }
        }

        return factorArray;
    }

    public static long pow(int base, int exponent){
        long product = 1;
        for (int i = 0; i < exponent; i++) {
            product *= base;
        }

        return product;
    }

    public static BigInteger fact(BigInteger number) {
        if (number.equals(BigInteger.ZERO)|| number.equals(BigInteger.ONE)) {
            return BigInteger.ONE;
        }
        return number.multiply(fact(number.subtract(BigInteger.ONE)));
    }

    public static int fact(int number) {
        if (number <= 1) {
            return 1;
        }
        return number * fact(number - 1);
    }

    public static long combine(int n, int r) {
        long[] fraction = new long[2];
        fraction[0] = 1;
        fraction[1] = 1;

        for (int i = 0; i < n-r; i++) {
            fraction[0] *= (n - i);
            fraction[1] *= (i + 1);
            fraction = simplify(fraction);
        }

        return fraction[0] / fraction[1];
    }

    public static long[] simplify(long[] fraction) {
        for (int i = 2; i < fraction[1]/2; i++) {
            if (fraction[0]%i == 0 && fraction[1]%i == 0) {
                fraction[0] /= i;
                fraction[1] /= i;
            }
        }

        return fraction;
    }

    public static String readPattern(String full) {
        StringBuilder repeat = new StringBuilder();

        if (full.length() < 2) {
            return full;
        }

        repeat.append(full.charAt(0));
        repeat.append(full.charAt(1));
        int count = 2;

        while (repeat.substring(0, count/2) != repeat.substring(count/2)) {
            if  (count+1 >= full.length()) {
                return full;
            }

            repeat.append(full.charAt(count));
            repeat.append(full.charAt(count+1));
            count += 2;
        }

        return repeat.substring(0, count/2);
    }

    public static boolean isPrime(long num) {
        if (num < 2) {
            return false;
        }

        if (num == 2) {
            return true;
        }

        if (num % 2 == 0) {
            return false;
        }

        for (int i = 3; i * i <= num; i += 2) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }
}
