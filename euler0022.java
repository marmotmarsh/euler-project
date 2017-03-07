import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Holden on 12/08/2016. - COMPLETED
 *
 *
 *
 * Problem 22 - Names Scores
 *
 * Using names.txt (saved as x0022.txt), a 46K text file containing
 * over five-thousand first names, begin by sorting it into alphabetical order. Then working
 * out the alphabetical value for each name, multiply this value by its alphabetical position
 * in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth
 * 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score
 * of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

public class Prob0022 {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long answer = namesScores("euler/src/x0022.txt");
        long endTime = System.nanoTime();

        System.out.println(answer);

        long duration = (endTime - startTime);
        EulerTime.time(duration);
    }

    public static long namesScores(String filename) {
        String[] names = parseFile(filename);
        Arrays.sort(names);
        long nameScores = 0;

        for (int i = 0; i < names.length; i++) {
            String name = names[i];
            int currentScore = 0;
            for (char c: name.toCharArray()) {
                if (c == '"') {
                    continue;
                }

                currentScore += (Character.getNumericValue(c) - 9);
            }

            nameScores += (currentScore * (i + 1));
        }

        return nameScores;
    }

    private static String[] parseFile(String filename) {
        String[] names;

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

            line = stringArray.get(0);
            names = line.split(",");
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        return names;
    }
}
