package O13_Exercicios;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ConverteParaCelsiusExc09();

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
	
	public static void CalcularRaioCirculoExc06() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe o diametro do circulo: ");
		int valor1 = lerTeclado.nextInt();
		
		System.out.println("O raio do circulo é: " + (valor1 / 2));
	}
	
	public static void CalcularAreaQuadradoExc07() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe a largura: ");
		int valor1 = lerTeclado.nextInt();
		System.out.println("A area do quadrado: " + (valor1 * valor1) * 2);
	}
	
	public static void CalcularSalarioExc08() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe o valor da hora trabalhada: ");
		int horaTrabalho = lerTeclado.nextInt();
		System.out.println("Informe a quantidade de horas trabalhada: ");
		int tempoTrabalho = lerTeclado.nextInt();
		System.out.println("A area do quadrado: " + (horaTrabalho * tempoTrabalho));
	}
	
	public static void ConverteParaCelsiusExc09() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe a temperatura em Farenheit: ");
		int temperatura = lerTeclado.nextInt();
		System.out.println("A temperatura em graus Celsius: " + (5*(temperatura-32)/9) );
	}
	
	public static void ConverterParaFahrenheitExc10() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe a temperatura em grau Celsius: ");
		int temperatura = lerTeclado.nextInt();
		System.out.println("A temperatura em graus Celsius: " + (temperatura * 1.8 + 32));
	}	

	
}
