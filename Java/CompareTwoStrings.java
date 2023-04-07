package Java;

import java.util.Scanner;

public class CompareTwoStrings {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        System.out.print("Input the first phrase: ");
        String s1 = in.nextLine();
        System.out.print("Input the second phrase: ");
        String s2 = in.nextLine();
        in.close();
        System.out.println("Let's get started!!!!");
        /**
         * Letś use the compareTo method...
         * Compares two strings lexicographically....
         * Must be the same ...
         */
        if (s1.compareTo(s2) > 0) {
            System.out.println(s1 + " is larger than " + s2);
        } else if (s1.compareTo(s2) < 0) {
            System.out.println(s2 + " is smaller than " + s1);
        } else {
            System.out.println("Both are equal!!!");
        }
    }

}
