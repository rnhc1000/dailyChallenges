package Java;

import java.util.Scanner;



public class ArmstrongNumber {

    public static int power(int remainder , int digits){
        int key, result = 1;

        for ( key = 1; key <= remainder; key++) {

            result = result*digits;

        }
        return result;
    
    }

    public static void main(String[] args) {

        

        int countDigits = 0;
        float armstrongNumber = 0;
        int divider = 1;
        int possibleNumber = 0;
        int numberOfDigits = 0;
        int number;
        int sum = 0;
        int remainder = 0;
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number: ");
        possibleNumber = in.nextInt();
        numberOfDigits = possibleNumber;
        in.close();
        while (numberOfDigits != 0) {
            countDigits += 1;
            numberOfDigits /= 10;
        }
        number = possibleNumber;
        System.out.println("Number of Digits: " + possibleNumber + " has " + countDigits);
        while (number != 0 ) {
            remainder = number % 10;
            sum = sum + power( remainder, countDigits );
            number = number / 10;
        }

        System.out.println(sum);

        if (possibleNumber == sum) {
            System.out.println("The number " + possibleNumber + " is an Armstrong Number");
        } else {
            System.out.println("The number " + possibleNumber + " is not an Armstrong number");
        }

    }

}
