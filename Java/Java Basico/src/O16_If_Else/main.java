package O16_If_Else;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.println("Entre com sua idade");
		int idade = scan.nextInt();
		
		if (idade >= 18) {
			System.out.println("É maior de idade");
		} else {
			System.out.println("É menor de idade");
		}
		
		System.out.println("Informe um valor");
		double valor = scan.nextDouble();
		
		if(valor <= 10) {
			System.out.println("Está barato");
		} else if (valor > 10 && valor < 15) {
			System.out.println("Você pode pedit um desconto");
		} else if (valor >= 15 && valor < 17) {
			System.out.println("Pode pesquisar mais");
		} else {
			System.out.println("Muito caro");
		}
	}

}
