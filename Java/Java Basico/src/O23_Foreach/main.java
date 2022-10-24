package O23_Foreach;

import java.util.Random;

public class main {

	public static void main(String[] args) {
		
		int[] notas = new int[10];
		Random random = new Random();
		
		for(int i=0; i < notas.length; i++) {
			notas[i] = random.nextInt(10);
		}
		
		
		for(int i=0; i < notas.length; i++) {
			int nota = notas[i];
			System.out.println(nota);
		}
		
		System.out.println(" - ");
		
		for (int nota : notas) {
			System.out.println(nota);
		}
		
		
		double[][] notasAlunos = new double[2][4];
		
		notasAlunos[0][0] = 10;
		notasAlunos[0][1] = 7;
		notasAlunos[0][2] = 9;
		notasAlunos[0][3] = 9.5;
		
		notasAlunos[1][0] = 9;
		notasAlunos[1][1] = 8;
		notasAlunos[1][2] = 7;
		notasAlunos[1][3] = 9;
		
		for(double[] notaAluno : notasAlunos) {
			for (double nota : notaAluno) {
				System.out.print(nota + "  ");
			}
			System.out.println();
		}
		
	}

}
