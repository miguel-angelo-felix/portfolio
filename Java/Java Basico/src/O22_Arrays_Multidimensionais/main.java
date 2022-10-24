package O22_Arrays_Multidimensionais;

import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		
		double[][] notasAlunos = new double[2][4];
		
		notasAlunos[0][0] = 10;
		notasAlunos[0][1] = 7;
		notasAlunos[0][2] = 9;
		notasAlunos[0][3] = 9.5;
		
		notasAlunos[1][0] = 9;
		notasAlunos[1][1] = 8;
		notasAlunos[1][2] = 7;
		notasAlunos[1][3] = 9;
		
		// Percorrendo matriz
		for(int i=0; i<notasAlunos.length; i++) {
			//System.out.println(notasAlunos[i] + "");
			for(int j=0; j<notasAlunos[i].length; j++) {
				//System.out.print(notasAlunos[i][j] + " | ");
				
			}
			//System.out.println();
		}

		//System.out.println();
		
		// Setando uma nova nota para o segundo aluno da matriz
		notasAlunos[1][3] = 2;
	
		for(int i=0; i<notasAlunos.length; i++) {
			//System.out.println(notasAlunos[i] + "");
			for(int j=0; j<notasAlunos[i].length; j++) {
				//System.out.print(notasAlunos[i][j] + " | ");
				
			}
			//System.out.println();
		}
		
		// Calculando média
		//System.out.println("Calculando a média de cada aluno: ");
		
		for(int i=0; i<notasAlunos.length; i++) {
			double soma =0;
			for(int j=0; j<notasAlunos[i].length; j++) {
				//System.out.print(notasAlunos[i][j] + " | ");
				soma = soma + notasAlunos[i][j];
			}
			
			if (soma/4 > 7) {
				//System.out.print(" - Aprovado por média!");
			} else {
				//System.out.print(" - Reprovado!");
			}
			//System.out.println();
		}
		
		// Nova forma de declarar uma matriz
		double[] aluno1 = {10, 5, 10, 9};
		double[][] aluno2 = { {5,8,9,10}, {10,9,8,7} };
		
		int[][][] matrizTridimensional = new int[3][3][3];
		
		for (int i=0; i < matrizTridimensional.length; i++) {
			for(int j=0; j < matrizTridimensional[i].length; j++) {
				for(int k=0; k < matrizTridimensional[i][j].length; k++) {
					matrizTridimensional[i][j][k] = i + j + k;
				}
			}
		}
		
		int soma=0;
		int somaPares=0;
		int somaImpares=0;
		for (int i=0; i < matrizTridimensional.length; i++) {
			for(int j=0; j < matrizTridimensional[i].length; j++) {
				for(int k=0; k < matrizTridimensional[i][j].length; k++) {
					soma += matrizTridimensional[i][j][k];
					
					if(matrizTridimensional[i][j][k] % 2 == 0) {
						somaPares += matrizTridimensional[i][j][k];
					} else {
						somaImpares += matrizTridimensional[i][j][k];
					}
				}
			}
		}
		
		//System.out.print(" Soma Total: " + soma);
		//System.out.print(" Soma Pares: " + somaPares);
		//System.out.print(" Soma Impares: " + somaImpares);
		
		Scanner scan = new Scanner(System.in);
		 
		System.out.println("Entre com o número de pessoas que serão entrevistadas: ");
		int numEntrevistado = scan.nextInt();
		
		String[][] nomesFilhos = new String[numEntrevistado][];
		
		for (int i=0; i<nomesFilhos.length; i++) {
			System.out.println("Entre com a quantidade de filhos: ");
			int qtdFilhos = scan.nextInt();
			
			nomesFilhos[i] = new String[qtdFilhos];
			
			for (int j=0; j<nomesFilhos[i].length; j++) {
				System.out.println("Digite o nome do filho: " + (j+1));
				nomesFilhos[i][j] = scan.next();
			}
		}
		
		for (int i=0; i<nomesFilhos.length; i++) {
			System.out.println("Pessoa " + i + " tem " + nomesFilhos[i].length + " filhos");
			for (int j=0; j<nomesFilhos[i].length; j++) {
				System.out.println(nomesFilhos[i][j]);
			}
		}
		
	}

}
