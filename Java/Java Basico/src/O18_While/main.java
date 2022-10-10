package O18_While;

public class main {

	public static void main(String[] args) {
		
		int i = 0;
		int max = 10;
		
		System.out.println("Contando até: " + max);

		while(i < max) {
			System.out.println("valor de i: " + i);
			i++;
		}
		
		do {
			System.out.println("valor de i: " + i);
			i++;
		} while (i < 11);
		
	}

}
