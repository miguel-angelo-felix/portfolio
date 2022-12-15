package O29_Orientacao_Objetos_RelacionamentoClasse;

public class main {

	public static void main(String[] args) {
		
		Contato contato = new Contato();
		Telefone telefone = new Telefone();
		Telefone telefone2 = new Telefone();
		Endereco endereco = new Endereco();
		
		contato.setNome("Tyrion");
		//contato.setEndereco("King Landing");
		//contato.setTelefone("11 99999-9999");
		
		// Criar objeto Telefone
		telefone.setTipo("Celular");
		telefone.setDdd("81");
		telefone.setNumero("9 0000-0000");
		
		// Criar objeto Telefone2
		telefone2.setTipo("Casa");
		telefone2.setDdd("81");
		telefone2.setNumero("9 9999-9999");
		
		Telefone[] telefones = new Telefone[2];
		telefones[0] = telefone;
		telefones[1] = telefone2;
		
		// Criar objeto endereço
		endereco.setNomeRua("Rua Game of Thrones");
		endereco.setNumero("n/a");
		endereco.setComplemento("-");
		endereco.setCidade("Kings Landing");
		endereco.setEstado("Westeros");
		endereco.setCep("9999-999");
		
		// Set Objetos
		contato.setEndereco(endereco);
		contato.setTelefones(telefones);
		
		System.out.println(contato.getNome());
		
		if (contato != null && contato.getEndereco() != null) {
			System.out.println(contato.getEndereco().getCidade());
		}
		
		if (contato != null && contato.getTelefones() != null) {
			for (Telefone t: contato.getTelefones()) {
				System.out.println(t.getDdd() + "  " + t.getNumero());
			}
		}
		
	}

}
