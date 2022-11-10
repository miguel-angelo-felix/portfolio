package O25_Orientacao_Objetos_Metodos;

public class main {

	public static void main(String[] args) {
		Carro van = new Carro();
		van.marca = "Fiat";
		van.modelo = "Ducato";
		//van.numPassageiros = 10;
		van.capCombustivel = 100;
		van.consumoCombustivel = 0.2;

//		System.out.println(van.marca);
//		System.out.println(van.modelo);
//		System.out.println();
//		
//		van.exibirAutonomia();
//		System.out.println("A autonomia do carro é: " + van.obterAutonomia()  + " km");
//		System.out.println();
//		
//		double qtdCombustivel = van.calcularCombustivel(12);
//		System.out.println("qtdCombustivel: " + qtdCombustivel);
		
		System.out.println("numPassageiros: " + van.numPassageiros );
		
		Carro van2 = new Carro("BMW");
		System.out.println("marca: " + van2.marca );
		
	}

}
