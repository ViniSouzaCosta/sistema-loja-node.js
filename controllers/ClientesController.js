import express from "express";
const router = express.Router();

router.get("/clientes/", (req, res) => {

    const clientes = [
        {
          nome: "João Silva",
          cpf: "123.456.789-00",
          endereco: "Rua das Flores, 123 - São Paulo, SP"
        },
        {
          nome: "Maria Oliveira",
          cpf: "987.654.321-11",
          endereco: "Av. Paulista, 456 - São Paulo, SP"
        },
        {
          nome: "Carlos Souza",
          cpf: "111.222.333-44",
          endereco: "Rua Amazonas, 789 - Belo Horizonte, MG"
        },
        {
          nome: "Ana Martins",
          cpf: "555.666.777-88",
          endereco: "Av. Brasil, 1010 - Curitiba, PR"
        },
        {
          nome: "Fernanda Rocha",
          cpf: "999.888.777-66",
          endereco: "Rua dos Andradas, 234 - Porto Alegre, RS"
        },
        {
          nome: "Paulo Mendes",
          cpf: "321.654.987-00",
          endereco: "Rua XV de Novembro, 67 - Florianópolis, SC"
        },
        {
          nome: "Juliana Ferreira",
          cpf: "444.555.666-77",
          endereco: "Av. Dom Pedro, 88 - Manaus, AM"
        },
        {
          nome: "Lucas Almeida",
          cpf: "222.333.444-55",
          endereco: "Rua Independência, 345 - Recife, PE"
        },
        {
          nome: "Gabriela Lima",
          cpf: "777.888.999-00",
          endereco: "Rua Atlântica, 910 - Salvador, BA"
        },
        {
          nome: "Rodrigo Teixeira",
          cpf: "666.777.888-99",
          endereco: "Rua do Sol, 432 - Fortaleza, CE"
        }
      ];

    res.render("clientes", {
        clientes 
    });
});

export default router;
