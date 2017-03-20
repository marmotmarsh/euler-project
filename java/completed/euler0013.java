import lib.EulerTime;
import lib.EulerUtil;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 * Problem 13 - Large Sum
 *
 */

public class Prob0013 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = largeSum("euler/src/x0013.txt", 10);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long largeSum(String filename, int digits) {
        long[] numbers = parseFile(filename);
        long sum = 0;
        long limit = EulerUtil.pow(10, digits);

        for (long i: numbers) {
            sum += i;
        }

        while (sum > limit) {
            sum /= 10;
        }

        return sum;
    }

    private static long[] parseFile(String filename) {
        long[] numbers;

        try {
            File file = new File(filename);
            FileReader fileReader = new FileReader(file);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            ArrayList<String> stringArray = new ArrayList<>();
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                stringArray.add(line);
            }
            fileReader.close();

            int dimension = stringArray.size();
            numbers = new long[dimension];

            for (int i = 0; i < dimension; i++) {
                numbers[i] = Long.parseLong(stringArray.get(i).substring(0, 12));
            }
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        return numbers;
    }
}
