package Java;

import java.util.ArrayList;
import java.util.List;

public class OddAndEvenNumbers {

    private Integer number;

    public OddAndEvenNumbers(Integer number) {
        this.number = number;
    }

    public OddAndEvenNumbers(int number) {
        this.number = number;
    }

    public boolean checkNumber(int num) {

        if (num % 2 == 0) {

            return true;
        }
        return false;
    }

    public boolean checkNumber(Integer num) {

        if (num % 2 == 0) {

            return true;
        }
        return false;
    }

    public static void main(String[] args) {

        List<Boolean> response = new ArrayList<Boolean>();
        List<Integer> numbers = new ArrayList<Integer>();
        Boolean[] result = new Boolean[] {};
        Boolean[] odd = new Boolean[] {};
        Boolean[] even = new Boolean[] {};

        for (int i = 0; i < 17; i++) {

            numbers.add(i);
        }

        for (Integer check : numbers) {

            OddAndEvenNumbers checkNumber = new OddAndEvenNumbers(check);
            if (checkNumber.checkNumber(check)) {
                response.add(true);
            } else {
                response.add(false);
            }
        }

        result = response.toArray(new Boolean[response.size()]);

        // for (Boolean ok : result)

        // System.out.print(ok.toString() + " ");

        for (Boolean inspect : result) {

            if (inspect == true) {
                System.out.print(inspect);
            } 
        }

        for (Boolean count : even) {

            System.out.print(count);

        }

    }
}
