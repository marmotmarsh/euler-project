import lib.EulerTime;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Holden on 11/20/2016. - COMPLETED
 *
 * Problem 11 - Largest Product in a Grid
 *
 */

public class Prob0011 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = largestProduct("euler/src/x0011.txt", 4);
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long largestProduct(String filename, int numbers) {
        int[][] grid = parseGrid(filename);
        int dimension = grid.length;
        int offset = numbers - 1;
        int largest = 0;

        // 4 numbers in a row
        for (int i = 0; i < dimension; i++) {
            for (int j = 0; j < (dimension - offset); j++) {
                int product = 1;
                for (int multiple = 0; multiple < numbers; multiple++) {
                    product *= grid[i][j+multiple];
                }

                if (product > largest) {
                    largest = product;
                }
            }
        }

        // 4 numbers in a column
        for (int i = 0; i < (dimension - offset); i++) {
            for (int j = 0; j < dimension; j++) {
                int product = 1;
                for (int multiple = 0; multiple < numbers; multiple++) {
                    product *= grid[i+multiple][j];
                }

                if (product > largest) {
                    largest = product;
                }
            }
        }

        // 4 numbers down diagonally
        for (int i = 0; i < (dimension - offset); i++) {
            for (int j = 0; j < (dimension - offset); j++) {
                int product = 1;
                for (int multiple = 0; multiple < numbers; multiple++) {
                    product *= grid[i+multiple][j+multiple];
                }

                if (product > largest) {
                    largest = product;
                }
            }
        }

        // 4 numbers up diagonally
        for (int i = offset; i < dimension; i++) {
            for (int j = 0; j < (dimension - offset); j++) {
                int product = 1;
                for (int multiple = 0; multiple < numbers; multiple++) {
                    product *= grid[i-multiple][j+multiple];
                }

                if (product > largest) {
                    largest = product;
                }
            }
        }

        return largest;
    }

    private static int[][] parseGrid(String filename) {
        int[][] grid;

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
            grid = new int[dimension][dimension];

            for (int i = 0; i < dimension; i++) {
                String[] row = stringArray.get(i).split(" ");
                for (int j = 0; j < dimension; j++) {
                    grid[i][j] = Integer.parseInt(row[j]);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        return grid;
    }
}
