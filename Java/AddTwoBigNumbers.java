package Java;

import java.math.BigInteger;
import java.util.Scanner;

public class AddTwoBigNumbers {

    public static void main(String[] args) throws Exception {

        String n1, n2;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter first number: ");
        n1 = input.nextLine();
        System.out.print("Enter second number: ");
        n2 = input.nextLine();
        input.close();
        BigInteger first = new BigInteger(n1);
        BigInteger second = new BigInteger(n2);
        BigInteger sum;
        sum = first.add(second);

        System.out.println("Sum of two Big Numbers: " + sum);

    }
}
