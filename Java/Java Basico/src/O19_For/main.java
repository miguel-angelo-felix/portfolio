package O19_For;

public class main {

	public static void main(String[] args) {
		
		for(int i=0; i <= 10; i++) {
			//System.out.println(i);
		}
		
		for(int i=0, j=10; i <= 10; i++, j--) {
			//System.out.println("I: " + i + " J: " + j);
		}

		int count = 0;
		for ( ; count < 10 ; ) {
			//System.out.println("Valor de count: " + count);
			count += 2;
		}
		
		for (int cont=0; cont<10; cont+=2) {
			//System.out.println("Valor de cont: " + cont);
		}
		
		int soma =0;
		for(int i=1; i<5; soma += i++);
		System.out.println("O valor da Soma é: "+soma);
	}

}
