package O20_Break_Continue;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Entre com um número: ");
		int num = scan.nextInt();
		
		System.out.println("Entre com um limite: ");
		int max = scan.nextInt();
		
		//breakFor(num, max);
		continueFor(num, max);
		
		

	}
	
	public static void breakFor(int num, int max) {
		for(int i=num; i<max; i++) {
			if (i%7 == 0) {
				System.out.println("O valor de i é: " + i);
				break;
			}
		}
	}
	
	public static void continueFor(int num, int max) {
		for(int i=num; i<max; i++) {
			if (i%7 == 0) {
				continue;
			}
			System.out.println("O valor de i é: " + i);
		}
	}

}
