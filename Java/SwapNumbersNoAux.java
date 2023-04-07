package Java;

import java.util.Scanner;

/**
 * The trick is to use Math concepts to tackle it....
 * 1. x = x + y;
 * 2. y = x - y;
 * 3. x = x - y;
 * 
 * x = 2;
 * y = 3;
 * x = 2 + 3 (5)
 * y = 5 - 3 (2)
 * x = 5 - 2 (3) 
 */

public class SwapNumbersNoAux {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Input the fisrt number: ");
        int x = input.nextInt();
        System.out.print("Input the second number: ");
        int y = input.nextInt();
        input.close();
        /**
         * Here is the math ....
         */
        x = x + y;
        y = x - y;
        x = x - y;

        System.out.print("This is the swap numbers:" + x + " " + y);

    }


    
}
