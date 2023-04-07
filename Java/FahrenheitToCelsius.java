package Java;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.Scanner;

/**
 * TC = ((TF-32)*5)/9
 * 9*Tc = 5TF-180
 * TF =  (9*TC) - 180
 * T (° C) = ( T (° F) - 32) × 5/9
 */
public class FahrenheitToCelsius {

    public static void main(String[] args) {

        float celsius = 0.00f;
        float fahrenheit = 0.00f;
        float factor = 5/9f;

        Scanner input = new Scanner(System.in);
        System.out.print("Enter temperature Fahrenheit: ");
        fahrenheit = input.nextFloat();
        celsius = (fahrenheit - 32.00f) * factor;
        input.close();
        DecimalFormat df = new DecimalFormat("#.####");
        df.setRoundingMode(RoundingMode.CEILING);
        System.out.println("Temperature Celsius = " + df.format(celsius));
    }
    
}
