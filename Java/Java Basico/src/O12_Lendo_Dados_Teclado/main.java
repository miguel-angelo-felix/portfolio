package O12_Lendo_Dados_Teclado;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		
		Scanner lerTeclado = new Scanner(System.in);
		
		/*
		System.out.println("Digite seu nome completo: ");
		String nomeCompleto = lerTeclado.nextLine();
		System.out.println("Seu nome é: " + nomeCompleto);
		
		System.out.println("Digite seu Primeiro Nome: ");
		String primeiroNome = lerTeclado.next();
		System.out.println("Seu nome é: " + primeiroNome);
		
		System.out.println("Digite sua idade: ");
		int idade = lerTeclado.nextInt();
		System.out.println("Sua idade é: " + idade);
		
		System.out.println("Digite sua altura: ");
		Double altura = lerTeclado.nextDouble();
		System.out.println("Sua altura é: " + altura);
		*/
		
		System.out.println("Digite seu nome, idade e altura: ");
		String nomeCompleto = lerTeclado.nextLine();
		int idade = lerTeclado.nextInt();
		Double altura = lerTeclado.nextDouble();
		
		System.out.println("Você digitou os seguintes valores: ");
		System.out.println("Nome: " + nomeCompleto);
		System.out.println("Idade: " + idade);
		System.out.println("Altura: " + altura);
	}

}
