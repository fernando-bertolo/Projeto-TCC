const express = require("express");
const visualizarVenda = express();
const tabelaVendas = require("../../../Database/Tabelas/Vendas/Vendas");
const Usuario = require("../../../Database/Tabelas/Usuarios/usuarios");
const Veiculo = require("../../../Database/Tabelas/Veiculos/veiculos");
const Marca = require("../../../Database/Tabelas/Marcas/marcas");
const Modelo = require("../../../Database/Tabelas/Modelos/modelos");
const Versao = require("../../../Database/Tabelas/Versoes/versoes");
const Cliente = require("../../../Database/Tabelas/Clientes/clientes");

visualizarVenda.get("/visualizar-venda", async (request, response) => {
    try {
        const registroVendas = await tabelaVendas.findAll({
            attributes: [
                "idVenda",
                "idVeiculo",
                "idUsuario",
                "idCliente",
                "valorVenda",
                "dataVenda",
            ],
            include: [
                {
                    model: Usuario,
                    attributes: ["nome"],
                },
                {
                    model: Veiculo,
                    attributes: [
                        "idVeiculo",
                        "ano",
                        "combustivel",
                        "quilometragem",
                        "valor",
                        "placa",
                    ],
                    include: [
                        {
                          model: Marca,
                          attributes: ["nomeMarca"],
                          include: [
                            {
                              model: Modelo,
                              attributes: ["nomeModelo"],
                              include: [
                                {
                                  model: Versao,
                                  attributes: ["nomeVersao"],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                },
                {
                    model: Cliente,
                    attributes: [
                        "nome", 
                        "cpf",
                        "nacionalidade",
                        "estadoCivil",
                        "email",
                        "dataNascimento",
                        "rg",
                        "celular",
                        "cep",
                        "endereco",
                        "bairro",
                        "cidade",
                        "numero",
                        "estado",
                    ],
                },
            ],
        });
        return response.send(registroVendas);
    } catch (error) {
        console.log(error)
        return response.status(500).json({Error: "Falha na visualização da venda!!"})
    }
})

module.exports = visualizarVenda;