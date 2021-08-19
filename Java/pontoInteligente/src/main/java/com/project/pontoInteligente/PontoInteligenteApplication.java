package com.project.pontoInteligente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.project.pontoInteligente.api.service.ExemploService;

@SpringBootApplication
public class PontoInteligenteApplication {

	@Autowired
	private ExemploService exemploService;
	
	public static void main(String[] args) {
		SpringApplication.run(PontoInteligenteApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner() {
		return args -> {
			this.exemploService.testaServico();
		};
	}
}
