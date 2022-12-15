package O30_Orientacao_Objetos_Heranca;

public class Professor extends Pessoa {
	
	private double salario;
	private String nomeCurso;
	
	public Professor() {
		super();
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getNomeCurso() {
		return nomeCurso;
	}

	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	
	// Methods 
	public double calcularSalarioLiquido() {
		return 0;
	}
	
}
