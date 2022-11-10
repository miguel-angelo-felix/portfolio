package O25_Orientacao_Objetos_Metodos;

public class Carro {

	String marca;
	String modelo;
	int numPassageiros;
	double capCombustivel;
	double consumoCombustivel;
	
	
	
	Carro(String marca, String modelo, int numPassageiros, double capCombustivel, double consumoCombustivel) {
		this.marca = marca;
		this.modelo = modelo;
		this.numPassageiros = numPassageiros;
		this.capCombustivel = capCombustivel;
		this.consumoCombustivel = consumoCombustivel;
	}
	
	Carro() {
		System.out.println("Classe Carro foi instanciada");
		numPassageiros = 4;
	}
	
	Carro(String marca, String modelo) {
		this("Fiat", "Ducato", 7, 10, 2);
	}
	
	Carro(String marca) {
		this.marca = marca;
	}

	void exibirAutonomia() {
		System.out.println("A autonomia do carro é: " + capCombustivel * consumoCombustivel + " km");
	}
	
	double obterAutonomia() {
		return capCombustivel * consumoCombustivel;
	}
	
	private double divideKMPorConsumoCOmbustivel(double km) {
		return km/consumoCombustivel;
	}
	
	double calcularCombustivel(double km) {
		return this.divideKMPorConsumoCOmbustivel(km);
	}
}
