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

    }
}


