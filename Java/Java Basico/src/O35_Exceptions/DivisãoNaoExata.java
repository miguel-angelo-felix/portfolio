package O35_Exceptions;

public class DivisãoNaoExata extends Exception {

	private int num;
	private int dem;
	
	public DivisãoNaoExata(int num, int dem) {
		super();
		this.num = num;
		this.dem = dem;
	}

	@Override
	public String toString() {
		return "Resultado de " + num + " / " + dem + " não é um inteiro!";
	}
	
	
}
