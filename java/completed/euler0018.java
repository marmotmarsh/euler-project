import lib.EulerTime;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Holden on 12/02/2016. - COMPLETED
 *
 * Problem 18 - Maximum Path Sum I
 *
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
