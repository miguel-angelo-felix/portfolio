package O34_Exception_MultiplosCatch;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		int[] numeros = {4, 8, 16, 32, 64, 128};
		int[] demon = {2, 0, 4, 8, 0};
		
		/*
		for (int i=0; i<numeros.length; i++) {
			
			try {
				System.out.println(numeros[i]+ "/" + demon[i] + " = " + (numeros[i]/demon[i]));
			}catch (ArithmeticException e1) {
				System.out.println("Erro ao dividir por zero");
				System.out.println(e1);
			}catch (ArrayIndexOutOfBoundsException e) {
				System.out.println("Posição do array inválida");
				System.out.println(e);
			}
			
		}
		
		
		for (int i=0; i<numeros.length; i++) {
			
			try {
				System.out.println(numeros[i]+ "/" + demon[i] + " = " + (numeros[i]/demon[i]));
			}catch (ArithmeticException e1) {
				System.out.println("Erro ao dividir por zero");
				System.out.println(e1);
				System.exit(0);
			}catch (Throwable e) {
				System.out.println("Posição do array inválida");
				System.out.println(e);
				System.exit(0);
			} finally {
				System.out.println("Essa linha é executada sempre após o try ou catch");
			}
			
		}
		
		for (int i=0; i<numeros.length; i++) {
			
			try {
				System.out.println(numeros[i]+ "/" + demon[i] + " = " + (numeros[i]/demon[i]));
			}catch (ArithmeticException | ArrayIndexOutOfBoundsException e1) {
				System.out.println("Erro ao dividir por zero");
				System.out.println(e1);
			}
			
		}
		*/
		
		System.out.println("Entre com número decimal");
		try {
			double num = leNumero();
		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage());
			e.printStackTrace();
		}
	
	}
	
	public static double leNumero() throws Exception {
		Scanner scan = new Scanner(System.in);
		double num = scan.nextDouble();
		return num;
	}
}
