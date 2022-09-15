package O15_Exercicios;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
	
		//MaiorValorExc01();
		//PositivoNegativoExc02();
		VerificaLetraExc03();
	}
	
	
	public static void MaiorValorExc01() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Digite valor 1");
		int valor1 = lerTeclado.nextInt();
		int valor2 = lerTeclado.nextInt();
		System.out.println("O maior valor digitado foi: " + (valor1 > valor2 ? valor1 : valor2));
	}
	
	public static void PositivoNegativoExc02() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Digite valor 1");
		int valor = lerTeclado.nextInt();
		
		if (valor > 0) {
			System.out.println("O valor é positvo: " + valor);
		} else if (valor < 0) {
			System.out.println("O valor é negativo: " + valor);
		} else {
			System.out.println("O valor é neutro: " + valor);
		}
	}
	
	public static void VerificaLetraExc03() {
		Scanner lerTeclado = new Scanner(System.in);
		System.out.println("Informe uma Letra");
		String valor = lerTeclado.nextLine();
		
		if ( valor == "m") {
			System.out.println("Sexo masculino: " + valor);
		} if (valor == "F" || valor == "f") {
			System.out.println("Sexo feminino: " + valor);
		}
	}

}
