package Java;

import java.util.Scanner;

public class InputScanner {

    public static void main(String[] args) {
    String name = "";
    int age = 0;
    float saldo = 0.00f;
    Scanner input = new Scanner(System.in);
    System.out.println("Digite seu nome: ");
    name = input.nextLine();
    System.out.println("Digite sua idade: ");
    age = input.nextInt();
    System.out.println("Informe o saldo no formato XXXX.YY: ");
    saldo = input.nextFloat();
    System.out.println("Nome: " + name.toUpperCase());
    System.out.println("Idade: " + age);
    System.out.println("Saldo: " + saldo);
    input.close();
    }
}
