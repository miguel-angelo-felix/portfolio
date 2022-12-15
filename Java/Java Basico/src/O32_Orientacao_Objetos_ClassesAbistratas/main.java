package O32_Orientacao_Objetos_ClassesAbistratas;

public class main {

	public static void main(String[] args) {
		
		Pessoa aluno = new Aluno();
		Pessoa professor = new Professor();
		
		aluno.setEndereco("rua 2");
		professor.setEndereco("rua 3");
		
		aluno.imprimirEtiquetaEndereco();
		professor.imprimirEtiquetaEndereco();
	}

}
