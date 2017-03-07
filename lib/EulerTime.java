/**
 * Created by Holden on 11/19/2016.
 */
public class EulerTime {
    public static void time(long duration) {
        if (duration < 1000) {
            System.out.println("This program took " + duration + " nanoseconds.");
        } else if (duration < 1000000) {
            System.out.println("This program took " + (duration / 1000) + " microseconds.");
        } else if (duration < 1000000000) {
            System.out.println("This program took " + (duration / 1000000) + " milliseconds.");
        } else if (duration < 60000000000L) {
            System.out.println("This program took " + (duration / 1000000000) + " seconds.");
        } else if (duration < 600000000000L) {
            System.out.println("This program took " + (duration / 60000000000L) +
                    " minutes and " + ((duration / 1000000000) % 60) +
                    " seconds.");
        } else {
            System.out.println("This program took over 10 minutes.");
        }
    }
}
