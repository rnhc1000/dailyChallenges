package Java;
/**
 * 
 * Playing with IntStream....
 * but the trick would be
 * int temp = 0;
 * int a = 5;
 * int b = 10;
 * 
 * temp = a;
 * a = b;
 * b = temp;
 * 
 * boring and pŕetty obvious....
 * 
 */
import java.util.Scanner;
import java.util.stream.IntStream;

public class SwapNumbersAux {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Input the first number: ");
        //int inputData [] = new int[2];
        int inputData[] = IntStream.rangeClosed(0,1).toArray();
        inputData[0] = input.nextInt();
        System.out.print("Input the second number: ");
        inputData[1] = input.nextInt();
        System.out.println("These are the numbers in the order input: "    + inputData[0] + " " + inputData[1]);
        System.out.println("These are the numbers in the reversed order: " + inputData[1] + " " + inputData[0]);
        input.close();
    }       
    
}
