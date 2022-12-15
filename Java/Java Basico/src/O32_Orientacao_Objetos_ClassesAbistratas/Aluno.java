package O32_Orientacao_Objetos_ClassesAbistratas;

public class Aluno extends Pessoa {

	
	private String curso;
	private double[] notas;
	
	public Aluno() {
		super();
	}
	
	public Aluno(String nome, String endereco, String telefone, String cpf, String curso) {
		super(nome, endereco, telefone, cpf);
		this.curso = curso;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public double[] getNotas() {
		return notas;
	}

	public void setNotas(double[] notas) {
		this.notas = notas;
	}
	
	// Methods
	public double calcularMedia() {
		return 0;
	}
	
	public boolean verificarAprovado() {
		return true;
	}
	
	public String obterEtiquetaEndereco() {
		String s = "Endereço do Aluno: ";
		s += super.getEndereco();
		return s;
	}

	@Override
	public void imprimirEtiquetaEndereco() {
		System.out.println(this.getEndereco());
		
	}
	
}
