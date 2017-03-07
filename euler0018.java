import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 *
 *
 * Problem 18 - Maximum Path Sum I
 *
 * By starting at the top of the triangle below and moving to adjacent numbers on
 * the row below, the maximum total from top to bottom is 23.
 *
 *                 3
 *                7 4
 *               2 4 6
 *              8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle below:
 *
 *                        75
 *                       95 64
 *                      17 47 82
 *                     18 35 87 10
 *                    20 04 82 47 65
 *                   19 01 23 75 03 34
 *                  88 02 77 73 07 63 67
 *                 99 65 04 28 06 16 70 92
 *                41 41 26 56 83 40 80 70 33
 *               41 48 72 33 47 32 37 16 94 29
 *              53 71 44 65 25 43 91 52 97 51 14
 *             70 11 33 28 77 73 17 78 39 68 17 57
 *            91 71 52 38 17 14 91 43 58 50 27 29 48
 *           63 66 04 68 89 53 67 30 73 16 69 87 40 31
 *          04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by
 * trying every route. However, Problem 67, is the same challenge with a triangle
 * containing one-hundred rows; it cannot be solved by brute force, and requires
 * a clever method! ;o)
 */

public class Prob0018 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int answer = maximumPathSumI("euler/src/x0018.txt");
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static int maximumPathSumI(String filename) {
        int[][] pyramid = parseFile(filename);
        int[] currentRow = pyramid[pyramid.length-1];
        int[] lowerRow;

        for (int i = pyramid.length-2; i >= 0; i--) {
            lowerRow = currentRow;
            currentRow = pyramid[i];

            for (int j = 0; j <= i; j++) {
                currentRow[j] += Math.max(lowerRow[j], lowerRow[j+1]);
            }
        }

        return currentRow[0];
    }

    private static int[][] parseFile(String filename) {
        int[][] pyramid;

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

            int dimension = 1;
            pyramid = new int[stringArray.size()][stringArray.size()];

            for (int i = 0; i < stringArray.size(); i++) {
                String[] row = stringArray.get(i).split(" ");
                for (int j = 0; j < dimension; j++) {
                    pyramid[i][j] = Integer.parseInt(row[j]);
                }

                dimension++;
            }
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        return pyramid;
    }
}
