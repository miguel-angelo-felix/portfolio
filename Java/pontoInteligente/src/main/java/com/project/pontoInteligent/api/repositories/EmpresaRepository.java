package com.project.pontoInteligent.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.pontoiteligente.api.entities.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

	Empresa findByCnpj(String cnpj);
}
