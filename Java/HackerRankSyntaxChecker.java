package Java;
import java.util.*;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

public class HackerRankSyntaxChecker {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int testCases = Integer.parseInt(in.nextLine());
        String [] regex = new String[] {};
        PatternSyntaxException exc = null;

        List<String> list = new ArrayList<String>();
        while (testCases > 0) {
            String pattern = in.nextLine();

            try {
                list.add(pattern);
            } catch (ClassCastException e) {

                System.out.println("Classe Não Permitida");

            } catch (NullPointerException f) {

                f.printStackTrace();

            } catch (IllegalArgumentException g ) {
                g.printStackTrace();
            }
            // Write your code
            testCases -= 1;
        }

        regex = list.toArray(new String[list.size()]);
        //System.out.println(regex);
        for (String item : regex) {
            System.out.println(item);
            try {
                Pattern.compile(item);
            } catch (PatternSyntaxException e) {
                exc = e;
            }

            if (exc != null) {
                System.out.println("Invalid");
            } else {
                System.out.println("Valid");   
            }
            exc = null;
        }
        in.close();
    }
}
