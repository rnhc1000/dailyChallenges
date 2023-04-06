import java.io.*;
import java.util.*;

public class HackerRankJavaStringTokens {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        String [] pieces = new String[] {};
        int sizeOfPieces = 0;
        pieces = s.split("[^a-zA-Z]+");
        List<String> list = new ArrayList<String>();

        for (String str: pieces) {
            if (str != null && str.length() > 0) {
                list.add(str);
            }
        }
        pieces = list.toArray(new String[list.size()]);

        sizeOfPieces = pieces.length;
        System.out.println(sizeOfPieces);
        for (int k = 0; k < sizeOfPieces; k++) {     
            System.out.println(pieces[k]);
        }
        // Write your code here.
        scan.close();
    }
}
