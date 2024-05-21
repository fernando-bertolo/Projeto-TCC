const express = require("express");
const criacaoVenda = express();
const tabelaVendas = require("../../../Database/Tabelas/Vendas/Vendas.js");
const tabelaVeiculo = require("../../../Database/Tabelas/Veiculos/veiculos.js");
const tabelaUsuario = require("../../../Database/Tabelas/Usuarios/usuarios.js");
const tabelaCliente = require("../../../Database/Tabelas/Clientes/clientes.js");

criacaoVenda.post("/criacao-venda", async (request, response) => {
    const {
        idVeiculo, 
        idUsuario,
        idCliente, 
        valorVenda,
        dataVenda
    } = request.body;
    
    try {

        const veiculoID = await tabelaVeiculo.findOne({
            where: {
                idVeiculo: idVeiculo,
            },
        });

        const usuarioID = await tabelaUsuario.findOne({
            where: {
                id: idUsuario,
            },
        });

        const clienteID = await tabelaCliente.findOne({
            where: {
                id: idCliente,
            },
        });

        const registrosVendasID = await tabelaVendas.findOne({
            where: {
                idVeiculo: idVeiculo,
                idUsuario: idUsuario,
                idCliente: idCliente,
            }
        })
        if(registrosVendasID) {
            return response.status(400).json({Error: "Registro ja cadastrado no sistema!!"})
        }



        if(!veiculoID || !usuarioID || !clienteID) {
            return response.status(400).json({Error: "Informações incompletas ou incorretas!!"})
        }


        await tabelaVendas.create({
            idVeiculo: idVeiculo,
            idUsuario: idUsuario,
            idCliente: idCliente,
            valorVenda: valorVenda,
            dataVenda: dataVenda,
        });

        return response.status(200).json({message: "Venda criada com sucesso!!"})
        

    } catch (error) {
        console.log(error);
        return response.status(500).json({Error: "Erro na criação da Venda!!"});
    }
})

module.exports = criacaoVenda;
