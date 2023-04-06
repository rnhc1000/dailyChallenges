import java.util.ArrayList;
import java.util.List;

class GreatestCommonDivider {

    public GreatestCommonDivider() {

    }

    static public int greatestCommonDivider(int n1, int n2) {
        if (n2 == 0) {
            // System.out.println("N2 == 0 " + n1);
            return n1;
        }
        // System.out.println(n2);
        // System.out.println("R " + n1 % n2);
        return greatestCommonDivider(n2, n1 % n2);
    }
}

class LeastCommonMultiple {

    static public int leastCommonMultiple(int n1, int n2) {

        if (n1 == 0 || n2 == 0) {
            return 0;
        } else {
            int gcd = GreatestCommonDivider.greatestCommonDivider(n1, n2);
            return Math.abs(n1 * n2) / gcd;
        }
    }
}

class GetResults {

    static public List<Integer> getResults(List<Integer> a, List<Integer> b) {
        int result = 0;
        // Get LCM of all elements of a
        int lcm = a.get(0);
        // Get GCD of all elements of b
        int gcd = b.get(0);
        // Count multiples of lcm that divide the gcd
        int multiple = 0;

        List<Integer> elements = new ArrayList<Integer>();

        for (Integer integer : a) {
            lcm = LeastCommonMultiple.leastCommonMultiple(lcm, integer);
        }

        for (Integer integer : b) {
            gcd = GreatestCommonDivider.greatestCommonDivider(gcd, integer);
        }

        while (multiple <= gcd) {
            multiple += lcm;

            if (gcd % multiple == 0) {
                // System.out.println("M " + multiple);

                elements.add(multiple);

                result++;
            }
        }
        
        elements.add(result);

        return elements;
    }

}

public class HackerRankBetweenTwoSets {

    public static void main(String[] args) {

        List<Integer> a = new ArrayList<Integer>();
        List<Integer> b = new ArrayList<Integer>();
        a.add(2);
        a.add(6);
        b.add(48);
        b.add(144);
        System.out.println(a);
        System.out.println(b);
        List<Integer> result = GetResults.getResults(a, b);

        System.out.println(result);

    }
}
