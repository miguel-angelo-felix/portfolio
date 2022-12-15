package O33_Orientacao_Objetos_Interfaces;

public abstract class Animal {

	private String nome;
	
	// Methods
	public abstract void emitirSom();
	
	// Gets - Sets
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
}
