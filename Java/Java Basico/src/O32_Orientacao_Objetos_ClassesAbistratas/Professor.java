package O32_Orientacao_Objetos_ClassesAbistratas;

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
	
	public String obterEtiquetaEndereco() {
		String s = "Endereço do Professor: ";
		s += super.getEndereco();
		return s;
	}

	public void imprimirEtiquetaEndereco() {
		System.out.println(this.getEndereco());
		
	}
	


	
	
}
