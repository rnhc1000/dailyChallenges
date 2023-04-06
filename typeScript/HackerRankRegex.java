import java.util.ArrayList;
import java.util.List;

public class HackerRankRegex {
    

    // public static final String EXAMPLE_TEST = "This is my small example "
    //         + "string which I'm going to " + "use for pattern matching.";

    public static final String EXAMPLE_TEST="           YES      leading spaces        are valid,    problemsetters are         evillllll";

    public static void main(String[] args) {
        System.out.println(EXAMPLE_TEST.matches("\\w+"));
        String[] splitString = (EXAMPLE_TEST.split("[^a-zA-Z]+"));
        List<String> list = new ArrayList<String>();

        for (String s: splitString) {
            if (s.length() > 0) {
                list.add(s);
            }
        }
        splitString = list.toArray(new String[list.size()]);

        //String s = splitString.toString();
        // for (String items: splitString) {
        //     System.out.println("---");
        //     System.out.println(items);
        // }
        
         
        System.out.println(splitString.length);// should be 14

        for (String string : splitString) {
            System.out.println(string);
        }
        // replace all whitespace with tabs
        System.out.println(EXAMPLE_TEST.replaceAll("\\s+", "\t"));
    }
} 
