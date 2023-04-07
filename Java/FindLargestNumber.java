package Java;

import java.util.Scanner;

public class FindLargestNumber {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int n1 = input.nextInt();
        System.out.print("Enter the second number: ");
        int n2 = input.nextInt();
        System.out.print("Enter the third number: ");
        int n3 = input.nextInt();
        input.close();
        int tmpOne, tmp = 0;
        int tmpTwo = 0;
        //n1 >= n2 ? tmp = n1 : tmp = n2;
        //n1 > n2 ? tmp = n1 : tmp = n2;
        //res=(num1>num2) ? (num1+num2):(num1-num2)
        tmpOne = (n1 > n2) ? n1 : n2;
        tmpTwo = (tmpOne > n3) ? tmpOne : n3;
        if ( n1 > n2) tmp = n1;
        else tmp = n2;
        if ( tmp > n3) ;
        else tmp = n3;

        System.out.println("The largest number is " + tmp + " " + tmpOne + " " + tmpTwo);
    }
    
}
