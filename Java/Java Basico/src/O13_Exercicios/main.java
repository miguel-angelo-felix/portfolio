package O13_Exercicios;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CalcularAreaCirculoExc06();

	}
	
	public static void OlaMundoExc01() {
		System.out.println("Olá Mundo");
	}
	
	public static void ExibirNumeroExc02() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe um valor: ");
		int valor1 = lerTeclado.nextInt();
		System.out.println("O número informado foi: " + valor1);
	}
	
	public static void SomaNumerosExc03() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe um valor 1: ");
		int valor1 = lerTeclado.nextInt();
		System.out.println("Informe um valor 2: ");
		int valor2 = lerTeclado.nextInt();
		System.out.println("A soma dos valores foi: " + (valor1 + valor2));
	}
	
	public static void MediaBimestralExc04() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe um valor 1: ");
		Double valor1 = lerTeclado.nextDouble();
		
		System.out.println("Informe um valor 2: ");
		Double valor2 = lerTeclado.nextDouble();
		
		System.out.println("Informe um valor 3: ");
		Double valor3 = lerTeclado.nextDouble();
		
		System.out.println("Informe um valor 4: ");
		Double valor4 = lerTeclado.nextDouble();
		System.out.println("A média bimestral é: " + (valor1 + valor2 + valor3 + valor4) / 4);
	}
	
	public static void ConverterMetrosCentimetrosExc05() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe um valor 1: ");
		Double valor1 = lerTeclado.nextDouble();
		
		System.out.println(valor1 + " metro, equivalem a: " + (valor1 * 100)+ "centimetros");
	}
	
	public static void CalcularAreaCirculoExc06() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("O raio do circulo: ");
		int valor1 = lerTeclado.nextInt();
		
		System.out.println(" A área do circulo é: " + ((valor1 * valor1) * 3.14));
	}
	

}
