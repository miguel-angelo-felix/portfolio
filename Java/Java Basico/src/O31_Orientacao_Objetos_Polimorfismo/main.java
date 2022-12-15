package O31_Orientacao_Objetos_Polimorfismo;

public class main {

	public static void main(String[] args) {
		
		Pessoa pessoa = new Pessoa();
		Pessoa aluno = new Aluno();
		Pessoa professor = new Professor();
		
		pessoa.setEndereco("rua 1");
		aluno.setEndereco("rua 2");
		professor.setEndereco("rua 3");

		System.out.println(pessoa.obterEtiquetaEndereco());
		System.out.println(aluno.obterEtiquetaEndereco());
		System.out.println(professor.obterEtiquetaEndereco());
	}

}
