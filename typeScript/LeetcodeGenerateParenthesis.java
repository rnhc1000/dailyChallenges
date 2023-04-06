import java.util.List;
import java.util.ArrayList;

public class LeetcodeGenerateParenthesis {


    public List<String> generateCombinations(int n) {

        List<String> combinations = new ArrayList<String>();
        //String delimiter = "";

        generateParenthesis(n, "", 0, 0, combinations);

        return combinations;

    }

    static void generateParenthesis(int n, String delimiter, int start, int end, List<String> combinations) {

        if (start + end == 2 * n) {
            combinations.add(delimiter);
            return;
        }

        if (start < n) {
            generateParenthesis(n, delimiter + "(", start + 1, end, combinations);
        }

        if (end < start) {
            generateParenthesis(n, delimiter + ")", start, end + 1, combinations);
        }
    }


    public static void main(String[] args) {

        LeetcodeGenerateParenthesis leetcodeGenerateParenthesis = new LeetcodeGenerateParenthesis();

        System.out.println(leetcodeGenerateParenthesis.generateCombinations(3));
        String str1 = "hello";
        String str2 = "hello";

        String str3 = new String("hello");
        System.out.println(str1 == str2); //true

        /**
         * String objects in Java are created in a region called
         * String pool. The reference variable in stack points
         * to the address in the string pool of thar string.
         * If you assign to another reference the same string value
         * java will return the same address bc the object is still there;
         * The comparison will be equal true
         * Otherwise if the operator new is used another object
         * is created with a new reference so the compariso will be false.
         */

        System.out.println(str3 == str1); //false

        System.out.println(str2.equals(str1)); //true
        System.out.println(str3.equals(str2)); //true

    }
}


